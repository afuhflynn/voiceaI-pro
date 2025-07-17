"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Activity, TrendingUp, Clock, MessageSquare, Brain, Zap, Mic, Target } from "lucide-react"

interface AgentMetricsProps {
  conversations: any[]
  domainExpertise: string
  agentStatus: string
  audioLevel: number
  confidence: number
}

export function AgentMetrics({
  conversations,
  domainExpertise,
  agentStatus,
  audioLevel,
  confidence,
}: AgentMetricsProps) {
  const totalConversations = conversations.length
  const avgResponseTime = 2.3
  const learningProgress = Math.min((totalConversations / 50) * 100, 100)
  const expertiseLevel = Math.min((totalConversations / 20) * 100, 100)
  const avgConfidence =
    conversations.length > 0
      ? conversations.reduce((acc, conv) => acc + (conv.confidence || 0.95), 0) / conversations.length
      : 0.95

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready":
        return "bg-green-500"
      case "listening":
        return "bg-blue-500"
      case "processing":
        return "bg-yellow-500"
      case "thinking":
        return "bg-purple-500"
      case "error":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Status Card */}
      <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${getStatusColor(agentStatus)} animate-pulse`} />
            Agent Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Current State</span>
            <Badge variant="secondary" className="capitalize">
              {agentStatus}
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Domain</span>
            <Badge className="bg-gradient-to-r from-chart-1 to-chart-2 text-white border-0">{domainExpertise}</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <Activity className="w-5 h-5 text-chart-1" />
            Performance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <div className="flex items-center justify-center mb-2">
                <MessageSquare className="w-4 h-4 text-chart-2" />
              </div>
              <div className="text-2xl font-bold">{totalConversations}</div>
              <div className="text-xs text-muted-foreground">Conversations</div>
            </div>

            <div className="text-center p-3 rounded-lg bg-muted/50">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-4 h-4 text-chart-1" />
              </div>
              <div className="text-2xl font-bold">{avgResponseTime}s</div>
              <div className="text-xs text-muted-foreground">Avg Response</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-chart-2" />
                  Learning Progress
                </span>
                <span className="font-medium">{Math.round(learningProgress)}%</span>
              </div>
              <Progress value={learningProgress} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-chart-1" />
                  Expertise Level
                </span>
                <span className="font-medium">{Math.round(expertiseLevel)}%</span>
              </div>
              <Progress value={expertiseLevel} className="h-2" />
            </div>
          </div>

          {/* Add audio level indicator */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-chart-1" />
                Audio Level
              </span>
              <span className="font-medium">{Math.round(audioLevel * 100)}%</span>
            </div>
            <Progress value={audioLevel * 100} className="h-2" />
          </div>

          {/* Add confidence indicator */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-2">
                <Target className="w-4 h-4 text-chart-2" />
                Avg Confidence
              </span>
              <span className="font-medium">{Math.round(avgConfidence * 100)}%</span>
            </div>
            <Progress value={avgConfidence * 100} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Learning Insights */}
      <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-chart-2" />
            AI Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
              <div className="w-2 h-2 bg-chart-2 rounded-full animate-pulse" />
              <span className="text-sm">RAG system active</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
              <div className="w-2 h-2 bg-chart-1 rounded-full animate-pulse" />
              <span className="text-sm">Knowledge base growing</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm">Continuous learning enabled</span>
            </div>
            {totalConversations > 5 && (
              <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span className="text-sm">Pattern recognition improving</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
