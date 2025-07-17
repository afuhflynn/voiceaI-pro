"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Clock, Mic, Sparkles } from "lucide-react"

const stats = [
  { icon: Mic, value: "1.2 M+", label: "Voice Interactions" },
  { icon: Clock, value: "< 200 ms", label: "Avg Latency" },
  { icon: TrendingUp, value: "98.5%", label: "Recognition Accuracy" },
  { icon: Sparkles, value: "24/7", label: "Continuous Learning" },
]

export function StatsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Card
            key={i}
            className="border-0 shadow-lg bg-card/60 backdrop-blur-xl text-center hover:shadow-xl transition-all"
          >
            <CardContent className="p-8 space-y-3">
              <s.icon className="w-8 h-8 mx-auto text-chart-1" />
              <div className="text-3xl font-bold">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
