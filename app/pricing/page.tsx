"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, X, Zap, Crown, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for individuals and small projects",
      icon: Zap,
      features: [
        "100 voice interactions/month",
        "Basic voice recognition",
        "Standard response time",
        "Email support",
        "Basic analytics",
      ],
      limitations: ["No custom domains", "Limited integrations", "Basic knowledge base"],
      cta: "Get Started Free",
      popular: false,
      gradient: "from-gray-500/10 to-gray-600/10",
    },
    {
      name: "Professional",
      price: "$49",
      period: "per month",
      description: "Ideal for growing businesses and teams",
      icon: Crown,
      features: [
        "5,000 voice interactions/month",
        "Advanced voice recognition",
        "Priority response time",
        "24/7 chat support",
        "Advanced analytics",
        "Custom knowledge base",
        "API access",
        "Team collaboration",
      ],
      limitations: ["Limited custom training"],
      cta: "Start Free Trial",
      popular: true,
      gradient: "from-chart-1/10 to-chart-2/10",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For large organizations with specific needs",
      icon: Rocket,
      features: [
        "Unlimited voice interactions",
        "Custom voice models",
        "Sub-200ms response time",
        "Dedicated support manager",
        "Custom analytics dashboard",
        "Unlimited knowledge bases",
        "Full API access",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantee",
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-purple-500/10 to-indigo-500/10",
    },
  ]

  const features = [
    {
      category: "Voice Processing",
      items: [
        { name: "Voice Recognition Accuracy", starter: "95%", pro: "98%", enterprise: "99.5%" },
        { name: "Response Time", starter: "< 1s", pro: "< 500ms", enterprise: "< 200ms" },
        { name: "Concurrent Users", starter: "10", pro: "100", enterprise: "Unlimited" },
        { name: "Language Support", starter: "5", pro: "25", enterprise: "50+" },
      ],
    },
    {
      category: "AI Capabilities",
      items: [
        { name: "RAG Technology", starter: false, pro: true, enterprise: true },
        { name: "Custom Training", starter: false, pro: "Limited", enterprise: "Full" },
        { name: "Domain Expertise", starter: "Basic", pro: "Advanced", enterprise: "Expert" },
        { name: "Learning Adaptation", starter: false, pro: true, enterprise: true },
      ],
    },
    {
      category: "Integration & Support",
      items: [
        { name: "API Access", starter: false, pro: true, enterprise: true },
        { name: "Webhooks", starter: false, pro: true, enterprise: true },
        { name: "Custom Integrations", starter: false, pro: "Limited", enterprise: "Unlimited" },
        { name: "Support Level", starter: "Email", pro: "24/7 Chat", enterprise: "Dedicated Manager" },
      ],
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
            <Crown className="w-4 h-4 mr-2" />
            Flexible Pricing
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. Start free, upgrade as you grow, and scale with enterprise
            solutions.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-chart-1" />
            <span>14-day free trial</span>
            <CheckCircle className="w-4 h-4 text-chart-1" />
            <span>No credit card required</span>
            <CheckCircle className="w-4 h-4 text-chart-1" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-xl bg-card/60 backdrop-blur-xl transition-all duration-300 transform hover:scale-105 ${
                  plan.popular ? "ring-2 ring-chart-1 shadow-2xl" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-chart-1 to-chart-2 text-white border-0 px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50 rounded-lg`} />

                <CardHeader className="relative text-center pb-8">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${plan.gradient} border border-border/50 flex items-center justify-center`}
                  >
                    <plan.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-bold">
                      {plan.price}
                      {plan.price !== "Free" && plan.price !== "Custom" && (
                        <span className="text-lg font-normal text-muted-foreground">/{plan.period.split(" ")[1]}</span>
                      )}
                    </div>
                    {plan.price !== "Custom" && <div className="text-sm text-muted-foreground">{plan.period}</div>}
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-chart-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-center gap-3 opacity-60">
                        <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full h-12 text-base ${
                      plan.popular
                        ? "bg-gradient-to-r from-chart-1 to-chart-2 hover:from-chart-1/90 hover:to-chart-2/90"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Detailed Feature Comparison</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compare all features across our plans to find the perfect fit for your requirements.
            </p>
          </div>

          <div className="space-y-12">
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold mb-6 text-center">{category.category}</h3>
                <Card className="border-0 shadow-xl bg-card/60 backdrop-blur-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border/50">
                            <th className="text-left p-6 font-semibold">Feature</th>
                            <th className="text-center p-6 font-semibold">Starter</th>
                            <th className="text-center p-6 font-semibold bg-chart-1/5">Professional</th>
                            <th className="text-center p-6 font-semibold">Enterprise</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.items.map((item, itemIndex) => (
                            <tr key={itemIndex} className="border-b border-border/30 last:border-b-0">
                              <td className="p-6 font-medium">{item.name}</td>
                              <td className="p-6 text-center">
                                {typeof item.starter === "boolean" ? (
                                  item.starter ? (
                                    <CheckCircle className="w-5 h-5 text-chart-1 mx-auto" />
                                  ) : (
                                    <X className="w-5 h-5 text-muted-foreground mx-auto" />
                                  )
                                ) : (
                                  <span className="text-sm">{item.starter}</span>
                                )}
                              </td>
                              <td className="p-6 text-center bg-chart-1/5">
                                {typeof item.pro === "boolean" ? (
                                  item.pro ? (
                                    <CheckCircle className="w-5 h-5 text-chart-1 mx-auto" />
                                  ) : (
                                    <X className="w-5 h-5 text-muted-foreground mx-auto" />
                                  )
                                ) : (
                                  <span className="text-sm font-medium">{item.pro}</span>
                                )}
                              </td>
                              <td className="p-6 text-center">
                                {typeof item.enterprise === "boolean" ? (
                                  item.enterprise ? (
                                    <CheckCircle className="w-5 h-5 text-chart-1 mx-auto" />
                                  ) : (
                                    <X className="w-5 h-5 text-muted-foreground mx-auto" />
                                  )
                                ) : (
                                  <span className="text-sm">{item.enterprise}</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our pricing and plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I change plans anytime?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
              },
              {
                question: "What happens if I exceed my limits?",
                answer:
                  "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional usage credits as needed.",
              },
              {
                question: "Is there a free trial?",
                answer:
                  "Yes, all paid plans come with a 14-day free trial. No credit card required to start, and you can cancel anytime during the trial.",
              },
              {
                question: "Do you offer custom enterprise solutions?",
                answer:
                  "Our Enterprise plan is fully customizable to meet your specific requirements, including on-premise deployment and custom integrations.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals already using VoiceAI Pro. Start your free trial today.
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
