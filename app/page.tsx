"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Play, Sparkles, Zap, Brain, Mic } from "lucide-react"
import Link from "next/link"
import { HeroSection } from "./components/hero-section"
import { StatsSection } from "./components/stats-section"
import { TestimonialsSection } from "./components/testimonials-section"

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Preview */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-background/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Advanced AI
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Revolutionary Voice Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of voice interaction with our cutting-edge AI platform that understands, learns, and
              adapts to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Brain,
                title: "RAG-Enhanced Intelligence",
                description: "Advanced retrieval-augmented generation for contextually perfect responses",
                gradient: "from-purple-500/10 to-blue-500/10",
              },
              {
                icon: Zap,
                title: "Real-time Learning",
                description: "Continuous improvement through every conversation and interaction",
                gradient: "from-yellow-500/10 to-orange-500/10",
              },
              {
                icon: Mic,
                title: "Universal Voice Recognition",
                description: "Precise speech recognition with domain-specific terminology support",
                gradient: "from-green-500/10 to-emerald-500/10",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
                />
                <CardHeader className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} border border-border/50 flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/features">
              <Button size="lg" className="h-14 px-8 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                Explore All Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Play className="w-4 h-4 mr-2" />
                Interactive Demo
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Experience Voice AI
                <span className="block text-chart-1">In Action</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Try our advanced voice agent with real-time processing, intelligent responses, and seamless interaction.
                No setup required.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Natural conversation flow",
                  "Domain-specific expertise",
                  "Real-time response streaming",
                  "Voice synthesis & recognition",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-chart-1 rounded-full" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/voice-agent">
                <Button size="lg" className="h-14 px-8 text-lg">
                  Try Voice Agent
                  <Mic className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-chart-1/20 to-chart-2/20 rounded-3xl blur-3xl" />
              <Card className="relative border-0 shadow-2xl bg-card/80 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-chart-1 to-chart-2 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-muted-foreground">Interactive Voice Demo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-chart-1/5 via-background to-chart-2/5" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
              Voice Experience?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals already using VoiceAI Pro to enhance their productivity and customer
            interactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/voice-agent">
              <Button size="lg" className="h-14 px-8 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-background/50 backdrop-blur-sm">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
