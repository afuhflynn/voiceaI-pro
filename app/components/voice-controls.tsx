"use client"

import { Button } from "@/components/ui/button"
import { Mic, MicOff, Volume2, VolumeX, Loader2 } from "lucide-react"

interface VoiceControlsProps {
  isListening: boolean
  isSpeaking: boolean
  isProcessing: boolean
  agentStatus: string
  onStartListening: () => void
  onStopListening: () => void
  onToggleSpeaking: () => void
  hasResponse: boolean
}

export function VoiceControls({
  isListening,
  isSpeaking,
  isProcessing,
  agentStatus,
  onStartListening,
  onStopListening,
  onToggleSpeaking,
  hasResponse,
}: VoiceControlsProps) {
  const isDisabled = agentStatus === "processing" || agentStatus === "thinking" || isProcessing

  return (
    <div className="flex justify-center gap-6">
      {/* Main Voice Button */}
      <Button
        size="lg"
        variant={isListening ? "destructive" : "default"}
        onClick={isListening ? onStopListening : onStartListening}
        disabled={isDisabled}
        className="h-16 px-8 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
      >
        {/* Button background animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-chart-1/20 to-chart-2/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative flex items-center gap-3">
          {isProcessing ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : isListening ? (
            <MicOff className="w-5 h-5" />
          ) : (
            <Mic className="w-5 h-5" />
          )}

          <span>{isProcessing ? "Processing..." : isListening ? "Stop Listening" : "Start Listening"}</span>
        </div>
      </Button>

      {/* Speaker Button */}
      <Button
        size="lg"
        variant="outline"
        onClick={onToggleSpeaking}
        disabled={!hasResponse}
        className="h-16 px-8 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-background/50 backdrop-blur-sm border-border/50 relative overflow-hidden group"
      >
        {/* Button background animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-chart-2/20 to-chart-1/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative flex items-center gap-3">
          {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}

          <span>{isSpeaking ? "Stop Speaking" : "Speak Response"}</span>
        </div>
      </Button>
    </div>
  )
}
