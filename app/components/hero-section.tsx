"use client";

import { Badge } from "@/components/ui/badge";
import { Brain, Database, Zap, Sparkles, Mic } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-chart-1/10 to-chart-2/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-chart-2/10 to-chart-1/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-chart-1/5 to-chart-2/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-muted/50 backdrop-blur-sm border border-border/50"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Next-Generation AI Voice Assistant
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                Intelligent Voice
              </span>
              <br />
              <span className="bg-gradient-to-r from-chart-1 to-chart-2/80 bg-clip-text text-transparent">
                Agent Platform
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advanced domain expertise with RAG-powered intelligence,
              continuous learning, and real-time voice processing for
              professional applications.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm font-medium bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-muted/50 transition-colors"
            >
              <Brain className="w-4 h-4 mr-2 text-chart-1" />
              RAG Enhanced
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm font-medium bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-muted/50 transition-colors"
            >
              <Database className="w-4 h-4 mr-2 text-chart-2" />
              Knowledge Base
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm font-medium bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-muted/50 transition-colors"
            >
              <Zap className="w-4 h-4 mr-2 text-chart-1" />
              Real-time Learning
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm font-medium bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-muted/50 transition-colors"
            >
              <Mic className="w-4 h-4 mr-2 text-chart-2" />
              Voice Processing
            </Badge>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">
                &lt; 200ms
              </div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">5+</div>
              <div className="text-sm text-muted-foreground">Domains</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
