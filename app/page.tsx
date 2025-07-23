"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Play, Sparkles, Zap, Brain, Mic } from "lucide-react";
import Link from "next/link";
import { HeroSection } from "./components/hero-section";
import { StatsSection } from "./components/stats-section";

const voiceTechDetails = [
  {
    icon: Brain,
    title: "RAG-Enhanced Intelligence",
    description:
      "Advanced retrieval-augmented generation for contextually perfect responses",
    gradient: "from-purple-500/10 to-blue-500/10",
  },
  {
    icon: Zap,
    title: "Real-time Learning",
    description:
      "Continuous improvement through every conversation and interaction",
    gradient: "from-yellow-500/10 to-orange-500/10",
  },
  {
    icon: Mic,
    title: "Universal Voice Recognition",
    description:
      "Precise speech recognition with domain-specific terminology support",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
];

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
            <Badge
              variant="outline"
              className="mb-4 bg-background/50 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Advanced AI
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Revolutionary Voice Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of voice interaction with our cutting-edge
              AI platform that understands, learns, and adapts to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {voiceTechDetails.map((feature, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-102"
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
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/features">
              <Button
                size="lg"
                className="h-14 px-8 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Explore All Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
