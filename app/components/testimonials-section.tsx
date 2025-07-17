"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "VoiceAI Pro has completely transformed our customer-support workflow—response times are lightning fast.",
    name: "Elena García",
    title: "Head of CX • CloudCore",
  },
  {
    quote: "The RAG integration means the assistant actually understands our domain. Our engineers love it.",
    name: "Sven Müller",
    title: "CTO • DevSphere",
  },
  {
    quote: "Switching to VoiceAI Pro cut our call-center costs by 40% while improving customer satisfaction.",
    name: "Aisha Khan",
    title: "Operations Lead • FinEdge",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Trusted by forward-thinking teams
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Card key={i} className="border-0 shadow-lg bg-card/60 backdrop-blur-xl hover:shadow-xl transition-all">
            <CardContent className="p-8 space-y-6">
              <Quote className="w-6 h-6 text-chart-1" />
              <p className="leading-relaxed quotation marks">
                {'"'}
                {t.quote}
                {'"'}
              </p>
              <div className="pt-4 border-t border-border/50">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.title}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
