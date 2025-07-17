"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Clock, User, Bot, MessageSquare } from "lucide-react"

interface Conversation {
  id: number
  timestamp: string
  userInput: string
  agentResponse: string
  domain: string
}

interface ConversationHistoryProps {
  conversations: Conversation[]
}

export function ConversationHistory({ conversations }: ConversationHistoryProps) {
  return (
    <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <MessageSquare className="w-6 h-6 text-chart-1" />
          Conversation History
        </CardTitle>
        <CardDescription className="text-base">
          Recent interactions with your AI assistant ({conversations.length} total conversations)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-4">
            {conversations.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground text-lg font-medium">No conversations yet</p>
                <p className="text-muted-foreground text-sm mt-2">Start by speaking with your AI assistant!</p>
              </div>
            ) : (
              conversations
                .slice()
                .reverse()
                .map((conversation) => (
                  <div
                    key={conversation.id}
                    className="group border border-border/50 rounded-xl p-6 space-y-4 bg-gradient-to-br from-background to-muted/20 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className="bg-gradient-to-r from-chart-1/10 to-chart-2/10 border-chart-1/20"
                      >
                        {conversation.domain}
                      </Badge>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {new Date(conversation.timestamp).toLocaleString()}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">You</p>
                          <p className="text-sm text-foreground leading-relaxed bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                            {conversation.userInput}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-green-900 dark:text-green-100 mb-1">AI Assistant</p>
                          <p className="text-sm text-foreground leading-relaxed bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                            {conversation.agentResponse}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
