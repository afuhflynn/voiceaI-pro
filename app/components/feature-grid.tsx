"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, Zap, Mic, Bot, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "RAG-Powered Intelligence",
    description: "Advanced retrieval-augmented generation for contextually aware responses",
    badge: "AI Core",
    gradient: "from-purple-500/10 to-blue-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Database,
    title: "Dynamic Knowledge Base",
    description: "Continuously expanding domain-specific knowledge repository",
    badge: "Knowledge",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Zap,
    title: "Real-time Learning",
    description: "Adaptive learning from every conversation and interaction",
    badge: "Learning",
    gradient: "from-yellow-500/10 to-orange-500/10",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: Mic,
    title: "Advanced Voice Processing",
    description: "Universal-streaming technology for precise speech recognition",
    badge: "Voice",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: Bot,
    title: "Domain Expertise",
    description: "Specialized knowledge in legal, medical, technical, and educational fields",
    badge: "Expertise",
    gradient: "from-red-500/10 to-pink-500/10",
    iconColor: "text-red-600 dark:text-red-400",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Comprehensive metrics and insights for continuous improvement",
    badge: "Analytics",
    gradient: "from-indigo-500/10 to-purple-500/10",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
]

export function FeatureGrid() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Powerful Features
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Built with cutting-edge AI technology for professional voice assistance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="group border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            <CardHeader className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} border border-border/50`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <Badge variant="secondary" className="text-xs font-medium">
                  {feature.badge}
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
