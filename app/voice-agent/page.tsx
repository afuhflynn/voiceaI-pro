"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Activity, Zap } from "lucide-react"
import { VoiceVisualizer } from "../components/voice-visualizer"
import { ConversationHistory } from "../components/conversation-history"
import { KnowledgeBase } from "../components/knowledge-base"
import { AgentMetrics } from "../components/agent-metrics"
import { StreamingResponse } from "../components/streaming-response"
import { StatusIndicator } from "../components/status-indicator"
import { VoiceControls } from "../components/voice-controls"
import { ErrorBoundary } from "../components/error-boundary"

export default function VoiceAgentPage() {
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [response, setResponse] = useState("")
  const [streamingResponse, setStreamingResponse] = useState("")
  const [audioLevel, setAudioLevel] = useState(0)
  const [conversations, setConversations] = useState([])
  const [agentStatus, setAgentStatus] = useState("ready")
  const [domainExpertise, setDomainExpertise] = useState("Technical Support")
  const [isProcessing, setIsProcessing] = useState(false)
  const [confidence, setConfidence] = useState(0)
  const [error, setError] = useState(null)

  const mediaRecorderRef = useRef(null)
  const audioContextRef = useRef(null)
  const analyserRef = useRef(null)
  const streamingTimeoutRef = useRef(null)

  useEffect(() => {
    initializeAudioContext()
    return () => {
      cleanup()
    }
  }, [])

  const initializeAudioContext = useCallback(() => {
    if (typeof window !== "undefined" && !audioContextRef.current) {
      try {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)()
        analyserRef.current = audioContextRef.current.createAnalyser()
        analyserRef.current.fftSize = 256
      } catch (error) {
        console.error("Error initializing audio context:", error)
        setError("Failed to initialize audio. Please check your browser permissions.")
      }
    }
  }, [])

  const cleanup = useCallback(() => {
    if (mediaRecorderRef.current && isListening) {
      mediaRecorderRef.current.stop()
    }
    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close()
    }
    if (streamingTimeoutRef.current) {
      clearTimeout(streamingTimeoutRef.current)
    }
  }, [isListening])

  const startListening = async () => {
    try {
      setError(null)
      setIsProcessing(true)

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      })

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm;codecs=opus",
      })
      mediaRecorderRef.current = mediaRecorder

      // Connect to audio analyser for visualization
      if (audioContextRef.current && analyserRef.current) {
        const source = audioContextRef.current.createMediaStreamSource(stream)
        source.connect(analyserRef.current)
      }

      const audioChunks = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.push(event.data)
        }
      }

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/webm" })
        await processAudio(audioBlob)
        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.onerror = (event) => {
        console.error("MediaRecorder error:", event.error)
        setError("Recording failed. Please try again.")
        setAgentStatus("error")
        setIsProcessing(false)
      }

      mediaRecorder.start(100) // Collect data every 100ms
      setIsListening(true)
      setAgentStatus("listening")
      setIsProcessing(false)

      // Start audio level monitoring
      monitorAudioLevel()
    } catch (error) {
      console.error("Error starting voice recording:", error)
      setError("Microphone access denied. Please enable microphone permissions.")
      setAgentStatus("error")
      setIsProcessing(false)
    }
  }

  const stopListening = useCallback(() => {
    if (mediaRecorderRef.current && isListening) {
      mediaRecorderRef.current.stop()
      setIsListening(false)
      setAgentStatus("processing")
    }
  }, [isListening])

  const monitorAudioLevel = useCallback(() => {
    if (!analyserRef.current) return

    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)

    const updateLevel = () => {
      if (isListening && analyserRef.current) {
        analyserRef.current.getByteFrequencyData(dataArray)
        const average = dataArray.reduce((a, b) => a + b) / dataArray.length
        const normalizedLevel = Math.min(average / 128, 1)
        setAudioLevel(normalizedLevel)
        requestAnimationFrame(updateLevel)
      }
    }

    updateLevel()
  }, [isListening])

  const processAudio = async (audioBlob) => {
    try {
      setAgentStatus("processing")
      const formData = new FormData()
      formData.append("audio", audioBlob)
      formData.append("domain", domainExpertise)

      const response = await fetch("/api/voice/process", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      if (data.transcript) {
        setTranscript(data.transcript)
        setConfidence(data.confidence || 0.95)
        await generateResponse(data.transcript)
      } else {
        throw new Error("No transcript received")
      }
    } catch (error) {
      console.error("Error processing audio:", error)
      setError(`Processing failed: ${error.message}`)
      setAgentStatus("error")
    }
  }

  const generateResponse = async (userInput) => {
    try {
      setAgentStatus("thinking")
      setStreamingResponse("")
      setResponse("")

      const response = await fetch("/api/voice/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userInput,
          domain: domainExpertise,
          conversationHistory: conversations.slice(-5),
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error("No response body")

      let fullResponse = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = new TextDecoder().decode(value)
        const lines = chunk.split("\n")

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6))
              if (data.content) {
                fullResponse += data.content
                setStreamingResponse(fullResponse)
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }

      setResponse(fullResponse)
      setStreamingResponse("")

      // Auto-speak response
      await speakResponse(fullResponse)

      // Save conversation
      const newConversation = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        userInput,
        agentResponse: fullResponse,
        domain: domainExpertise,
        confidence,
      }

      setConversations((prev) => [...prev, newConversation])
      setAgentStatus("ready")
    } catch (error) {
      console.error("Error generating response:", error)
      setError(`Response generation failed: ${error.message}`)
      setAgentStatus("error")
    }
  }

  const speakResponse = async (text) => {
    if ("speechSynthesis" in window && text) {
      try {
        setIsSpeaking(true)
        setAgentStatus("speaking")

        // Cancel any ongoing speech
        speechSynthesis.cancel()

        const utterance = new SpeechSynthesisUtterance(text)
        utterance.rate = 0.9
        utterance.pitch = 1.0
        utterance.volume = 0.8

        // Try to use a more natural voice
        const voices = speechSynthesis.getVoices()
        const preferredVoice = voices.find(
          (voice) => voice.name.includes("Neural") || voice.name.includes("Enhanced") || voice.lang.startsWith("en"),
        )
        if (preferredVoice) {
          utterance.voice = preferredVoice
        }

        utterance.onend = () => {
          setIsSpeaking(false)
          setAgentStatus("ready")
        }

        utterance.onerror = (event) => {
          console.error("Speech synthesis error:", event.error)
          setIsSpeaking(false)
          setAgentStatus("ready")
          setError("Speech synthesis failed. Please try again.")
        }

        speechSynthesis.speak(utterance)
      } catch (error) {
        console.error("Error in speech synthesis:", error)
        setIsSpeaking(false)
        setAgentStatus("ready")
        setError("Speech synthesis failed. Please try again.")
      }
    }
  }

  const toggleSpeaking = () => {
    if (isSpeaking) {
      speechSynthesis.cancel()
      setIsSpeaking(false)
      setAgentStatus("ready")
    } else if (response) {
      speakResponse(response)
    }
  }

  const clearError = () => {
    setError(null)
    setAgentStatus("ready")
  }

  const handleKeyboardShortcuts = useCallback(
    (event) => {
      if (event.code === "Space" && event.ctrlKey) {
        event.preventDefault()
        if (isListening) {
          stopListening()
        } else {
          startListening()
        }
      }
      if (event.code === "Escape") {
        event.preventDefault()
        clearError()
        if (isSpeaking) {
          speechSynthesis.cancel()
          setIsSpeaking(false)
          setAgentStatus("ready")
        }
      }
    },
    [isListening, stopListening, isSpeaking],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboardShortcuts)
    return () => window.removeEventListener("keydown", handleKeyboardShortcuts)
  }, [handleKeyboardShortcuts])

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-chart-1/10 to-chart-2/10 rounded-full blur-3xl animate-float" />
            <div
              className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-chart-2/10 to-chart-1/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "3s" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-6 bg-background/50 backdrop-blur-sm">
              <Activity className="w-4 h-4 mr-2" />
              Live Voice Agent
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                AI Voice Assistant
              </span>
              <br />
              <span className="bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
                Interactive Demo
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience real-time voice interaction with our advanced AI assistant. Speak naturally and get intelligent
              responses powered by RAG technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl + Space</kbd>
                <span>Toggle listening</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">Esc</kbd>
                <span>Clear errors</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
            {/* Error Display */}
            {error && (
              <Card className="border-red-200 bg-red-50 dark:bg-red-950/30 dark:border-red-800">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-red-700 dark:text-red-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span className="font-medium">Error: {error}</span>
                    </div>
                    <button
                      onClick={clearError}
                      className="text-red-700 dark:text-red-300 hover:text-red-900 dark:hover:text-red-100 text-sm underline"
                    >
                      Dismiss
                    </button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Voice Interface Section */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
              {/* Main Voice Interface */}
              <div className="xl:col-span-3">
                <Card className="border-0 shadow-2xl bg-card/60 backdrop-blur-xl relative overflow-hidden">
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-chart-1/5 via-transparent to-chart-2/5 opacity-50" />

                  <CardHeader className="text-center pb-8 relative">
                    <StatusIndicator status={agentStatus} />

                    <div className="space-y-4 mt-6">
                      <CardTitle className="text-3xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                        AI Voice Interface
                      </CardTitle>
                      <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Engage in natural conversation with your specialized AI assistant. Use keyboard shortcuts for
                        quick access.
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-8 relative">
                    {/* Voice Visualizer */}
                    <div className="flex justify-center">
                      <VoiceVisualizer
                        isListening={isListening}
                        isSpeaking={isSpeaking}
                        audioLevel={audioLevel}
                        agentStatus={agentStatus}
                      />
                    </div>

                    {/* Voice Controls */}
                    <VoiceControls
                      isListening={isListening}
                      isSpeaking={isSpeaking}
                      isProcessing={isProcessing}
                      agentStatus={agentStatus}
                      onStartListening={startListening}
                      onStopListening={stopListening}
                      onToggleSpeaking={toggleSpeaking}
                      hasResponse={!!response}
                    />

                    {/* Conversation Display */}
                    <div className="space-y-6">
                      {transcript && (
                        <div className="group animate-in slide-in-from-bottom-4 duration-500">
                          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 to-blue-100/80 dark:from-blue-950/30 dark:to-blue-900/30 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                <h4 className="font-semibold text-blue-900 dark:text-blue-100">You said:</h4>
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {Math.round(confidence * 100)}% confidence
                              </Badge>
                            </div>
                            <p className="text-blue-800 dark:text-blue-200 leading-relaxed">{transcript}</p>
                          </div>
                        </div>
                      )}

                      {(streamingResponse || response) && (
                        <div className="group animate-in slide-in-from-bottom-4 duration-500">
                          <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50/80 to-emerald-100/80 dark:from-green-950/30 dark:to-emerald-900/30 border border-green-200/50 dark:border-green-800/50 backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                              <h4 className="font-semibold text-green-900 dark:text-green-100">AI Response:</h4>
                            </div>
                            <StreamingResponse
                              content={streamingResponse || response}
                              isStreaming={!!streamingResponse}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Agent Metrics Sidebar */}
              <div className="xl:col-span-1">
                <AgentMetrics
                  conversations={conversations}
                  domainExpertise={domainExpertise}
                  agentStatus={agentStatus}
                  audioLevel={audioLevel}
                  confidence={confidence}
                />
              </div>
            </div>

            {/* Enhanced Tabs Section */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Advanced Capabilities
                </h2>
                <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
                  Explore conversation analytics, manage your knowledge repository, and fine-tune your AI assistant's
                  behavior
                </p>
              </div>

              <Tabs defaultValue="conversations" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-16 p-1 bg-muted/30 backdrop-blur-xl border border-border/50">
                  <TabsTrigger
                    value="conversations"
                    className="text-sm font-medium h-full data-[state=active]:bg-background/80"
                  >
                    <Activity className="w-4 h-4 mr-2" />
                    Conversations
                  </TabsTrigger>
                  <TabsTrigger
                    value="knowledge"
                    className="text-sm font-medium h-full data-[state=active]:bg-background/80"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Knowledge Base
                  </TabsTrigger>
                  <TabsTrigger
                    value="settings"
                    className="text-sm font-medium h-full data-[state=active]:bg-background/80"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Configuration
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="conversations" className="mt-8">
                  <ConversationHistory conversations={conversations} />
                </TabsContent>

                <TabsContent value="knowledge" className="mt-8">
                  <KnowledgeBase domainExpertise={domainExpertise} />
                </TabsContent>

                <TabsContent value="settings" className="mt-8">
                  <Card className="border-0 shadow-2xl bg-card/60 backdrop-blur-xl">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl">
                        <Settings className="w-6 h-6 text-chart-1" />
                        Agent Configuration
                      </CardTitle>
                      <CardDescription className="text-base">
                        Customize your AI assistant's domain expertise and behavioral parameters
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="text-sm font-medium">Domain Expertise</label>
                          <select
                            className="w-full h-12 px-4 rounded-xl border border-input bg-background/50 backdrop-blur-sm text-foreground shadow-sm focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                            value={domainExpertise}
                            onChange={(e) => setDomainExpertise(e.target.value)}
                          >
                            <option value="Technical Support">🔧 Technical Support</option>
                            <option value="Legal">⚖️ Legal Advisory</option>
                            <option value="Medical">🏥 Medical Consultation</option>
                            <option value="Education">🎓 Educational Assistant</option>
                            <option value="Customer Service">💬 Customer Service</option>
                          </select>
                        </div>

                        <div className="space-y-3">
                          <label className="text-sm font-medium">Response Style</label>
                          <select className="w-full h-12 px-4 rounded-xl border border-input bg-background/50 backdrop-blur-sm text-foreground shadow-sm focus:ring-2 focus:ring-ring focus:border-transparent transition-all">
                            <option value="professional">Professional</option>
                            <option value="casual">Casual</option>
                            <option value="detailed">Detailed</option>
                            <option value="concise">Concise</option>
                          </select>
                        </div>
                      </div>

                      <div className="p-6 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 backdrop-blur-sm">
                        <h4 className="font-semibold mb-4 text-lg">Current Configuration</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center p-3 rounded-lg bg-background/50">
                            <div className="text-sm text-muted-foreground">Domain</div>
                            <Badge variant="default" className="mt-1">
                              {domainExpertise}
                            </Badge>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-background/50">
                            <div className="text-sm text-muted-foreground">RAG Status</div>
                            <Badge variant="default" className="mt-1 bg-green-500">
                              Active
                            </Badge>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-background/50">
                            <div className="text-sm text-muted-foreground">Learning</div>
                            <Badge variant="default" className="mt-1 bg-blue-500">
                              Enabled
                            </Badge>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-background/50">
                            <div className="text-sm text-muted-foreground">Voice</div>
                            <Badge variant="default" className="mt-1 bg-purple-500">
                              Enhanced
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}
