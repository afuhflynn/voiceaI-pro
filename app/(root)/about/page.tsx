"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Lightbulb, ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former AI researcher at Stanford with 15+ years in voice technology and machine learning.",
      image: "/placeholder.svg?height=300&width=300",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer specializing in distributed systems and real-time audio processing.",
      image: "/placeholder.svg?height=300&width=300",
      social: { linkedin: "#", github: "#" },
    },
    {
      name: "Dr. Aisha Patel",
      role: "Head of AI Research",
      bio: "PhD in Natural Language Processing from MIT, expert in RAG systems and conversational AI.",
      image: "/placeholder.svg?height=300&width=300",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "James Kim",
      role: "VP of Engineering",
      bio: "Full-stack architect with expertise in scalable voice platforms and cloud infrastructure.",
      image: "/placeholder.svg?height=300&width=300",
      social: { linkedin: "#", github: "#" },
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with voice AI technology.",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Every feature is designed with our users' needs and experiences in mind.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in AI accuracy, performance, and reliability.",
    },
    {
      icon: Lightbulb,
      title: "Transparency",
      description: "We believe in open communication and ethical AI development practices.",
    },
  ]

  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to democratize voice AI technology" },
    { year: "2021", title: "First Product Launch", description: "Released our initial voice recognition platform" },
    {
      year: "2022",
      title: "RAG Integration",
      description: "Pioneered retrieval-augmented generation for voice assistants",
    },
    { year: "2023", title: "Enterprise Adoption", description: "Reached 1000+ enterprise customers worldwide" },
    {
      year: "2024",
      title: "AI Breakthrough",
      description: "Achieved 99.5% accuracy in domain-specific voice recognition",
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
            <Users className="w-4 h-4 mr-2" />
            About VoiceAI Pro
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Pioneering the Future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
              Voice Intelligence
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're on a mission to make advanced voice AI accessible to everyone, combining cutting-edge research with
            practical solutions that transform how people interact with technology.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Card className="border-0 shadow-xl bg-card/60 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To democratize advanced voice AI technology by creating intelligent, accessible, and ethical voice
                  assistants that enhance human productivity and communication across all industries and applications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card/60 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where natural voice interaction is the primary interface between humans and technology,
                  enabling seamless, intelligent conversations that understand context, intent, and nuance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do, from product development to customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-chart-1/20 to-chart-2/20 border border-border/50 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-chart-1" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-center">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to advance voice AI technology.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <div className="text-2xl font-bold text-chart-1">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-chart-1 rounded-full mt-2" />
                <Card className="flex-1 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              World-class experts in AI, engineering, and product development working together to push the boundaries of
              voice technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-chart-1/20 to-chart-2/20 border-2 border-border/50 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                        e.currentTarget.nextElementSibling.style.display = "flex"
                      }}
                    />
                    <div
                      className="w-full h-full bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center"
                      style={{ display: "none" }}
                    >
                      <Users className="w-8 h-8 text-muted-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-chart-1 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-muted-foreground hover:text-chart-1 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-muted-foreground hover:text-chart-1 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-muted-foreground hover:text-chart-1 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to be part of the voice AI revolution? Explore our platform or get in touch to learn more about
            partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/voice-agent">
              <Button size="lg" className="h-14 px-8 text-lg">
                Try Our Platform
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-background/50 backdrop-blur-sm">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
