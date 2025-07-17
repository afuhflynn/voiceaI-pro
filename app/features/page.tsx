"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  Database,
  Zap,
  Mic,
  Bot,
  TrendingUp,
  Shield,
  Globe,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: "RAG-Powered Intelligence",
      description:
        "Advanced retrieval-augmented generation for contextually aware responses with domain-specific knowledge integration.",
      benefits: ["Contextual understanding", "Domain expertise", "Accurate responses", "Knowledge synthesis"],
      gradient: "from-purple-500/10 to-blue-500/10",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Database,
      title: "Dynamic Knowledge Base",
      description:
        "Continuously expanding repository of domain-specific information with semantic search capabilities.",
      benefits: ["Real-time updates", "Semantic search", "Version control", "Multi-domain support"],
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Zap,
      title: "Real-time Learning",
      description: "Adaptive learning system that improves from every conversation and user interaction.",
      benefits: ["Continuous improvement", "Pattern recognition", "Personalization", "Performance optimization"],
      gradient: "from-yellow-500/10 to-orange-500/10",
      iconColor: "text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: Mic,
      title: "Advanced Voice Processing",
      description: "Universal-streaming technology with precise speech recognition and natural voice synthesis.",
      benefits: ["Multi-language support", "Noise cancellation", "Real-time processing", "Natural synthesis"],
      gradient: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      icon: Bot,
      title: "Domain Specialization",
      description: "Expert-level knowledge in legal, medical, technical, educational, and business domains.",
      benefits: ["Professional expertise", "Industry compliance", "Specialized terminology", "Custom training"],
      gradient: "from-red-500/10 to-pink-500/10",
      iconColor: "text-red-600 dark:text-red-400",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Comprehensive metrics and insights for continuous improvement and optimization.",
      benefits: ["Usage analytics", "Performance tracking", "Improvement insights", "ROI measurement"],
      gradient: "from-indigo-500/10 to-purple-500/10",
      iconColor: "text-indigo-600 dark:text-indigo-400",
    },
  ]

  const useCases = [
    {
      title: "Customer Support",
      description: "24/7 intelligent customer service with human-like interactions",
      icon: Users,
      features: ["Multi-language support", "Escalation handling", "Knowledge base integration", "Sentiment analysis"],
    },
    {
      title: "Technical Documentation",
      description: "Interactive documentation assistant for complex technical queries",
      icon: Database,
      features: ["Code examples", "API documentation", "Troubleshooting guides", "Version tracking"],
    },
    {
      title: "Educational Assistant",
      description: "Personalized learning companion for students and professionals",
      icon: Brain,
      features: ["Adaptive learning", "Progress tracking", "Interactive tutorials", "Assessment tools"],
    },
    {
      title: "Healthcare Support",
      description: "Medical information assistant with compliance and accuracy",
      icon: Shield,
      features: ["HIPAA compliance", "Medical terminology", "Drug interactions", "Symptom analysis"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-chart-1/10 to-chart-2/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-chart-2/10 to-chart-1/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6 bg-background/50 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            Advanced Features
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Powerful AI Features
            </span>
            <br />
            <span className="bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
              Built for Professionals
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover the comprehensive suite of AI-powered features designed to transform your voice interactions and
            enhance productivity across all domains.
          </p>
          <Link href="/voice-agent">
            <Button size="lg" className="h-14 px-8 text-lg">
              Try Features Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Core Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each feature is designed to work seamlessly together, creating a powerful and intelligent voice assistant
              platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-chart-1" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industry Applications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored solutions for different industries and use cases, each optimized for specific requirements and
              compliance needs.
            </p>
          </div>

          <Tabs defaultValue="support" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-16 p-1 bg-muted/30 backdrop-blur-xl border border-border/50 mb-8">
              <TabsTrigger value="support" className="text-sm font-medium h-full">
                Customer Support
              </TabsTrigger>
              <TabsTrigger value="technical" className="text-sm font-medium h-full">
                Technical Docs
              </TabsTrigger>
              <TabsTrigger value="education" className="text-sm font-medium h-full">
                Education
              </TabsTrigger>
              <TabsTrigger value="healthcare" className="text-sm font-medium h-full">
                Healthcare
              </TabsTrigger>
            </TabsList>

            {useCases.map((useCase, index) => (
              <TabsContent key={index} value={["support", "technical", "education", "healthcare"][index]}>
                <Card className="border-0 shadow-xl bg-card/60 backdrop-blur-xl">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-chart-1 to-chart-2 rounded-xl flex items-center justify-center">
                            <useCase.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{useCase.title}</h3>
                            <p className="text-muted-foreground">{useCase.description}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {useCase.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-chart-1" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <useCase.icon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                            <p className="text-muted-foreground">Interactive Demo Available</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Technical Specifications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on cutting-edge technology with enterprise-grade performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Response Time", value: "< 200ms", description: "Ultra-fast processing" },
              { icon: Globe, title: "Languages", value: "50+", description: "Multi-language support" },
              { icon: Shield, title: "Uptime", value: "99.9%", description: "Enterprise reliability" },
              { icon: TrendingUp, title: "Accuracy", value: "98.5%", description: "Industry-leading precision" },
            ].map((spec, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <spec.icon className="w-8 h-8 text-chart-1 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">{spec.value}</div>
                  <div className="font-semibold mb-1">{spec.title}</div>
                  <div className="text-sm text-muted-foreground">{spec.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience
            <span className="block bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
              Next-Generation Voice AI?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your free trial today and discover how our advanced features can transform your voice interactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/voice-agent">
              <Button size="lg" className="h-14 px-8 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-background/50 backdrop-blur-sm">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
