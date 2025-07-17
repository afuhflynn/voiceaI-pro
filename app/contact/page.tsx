"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Headphones } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@voiceaipro.com",
      availability: "24/7 response",
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9AM-6PM EST",
      gradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant messaging support",
      contact: "Available on website",
      availability: "24/7 for Pro+ plans",
      gradient: "from-purple-500/10 to-indigo-500/10",
    },
    {
      icon: Users,
      title: "Enterprise Support",
      description: "Dedicated account manager",
      contact: "enterprise@voiceaipro.com",
      availability: "Custom SLA available",
      gradient: "from-orange-500/10 to-red-500/10",
    },
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Suite 100",
      zipcode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
    },
    {
      city: "New York",
      address: "456 Tech Avenue, Floor 25",
      zipcode: "New York, NY 10001",
      phone: "+1 (555) 987-6543",
    },
    {
      city: "London",
      address: "789 AI Street, Level 10",
      zipcode: "London, UK EC1A 1BB",
      phone: "+44 20 1234 5678",
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
            <Headphones className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              We're Here to
            </span>
            <br />
            <span className="bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
              Help You Succeed
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Have questions about VoiceAI Pro? Need technical support? Want to discuss enterprise solutions? Our team of
            experts is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the contact method that works best for you. We're committed to providing excellent support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
                />
                <CardHeader className="relative text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${method.gradient} border border-border/50 flex items-center justify-center`}
                  >
                    <method.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative text-center">
                  <div className="font-semibold mb-2">{method.contact}</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    {method.availability}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <Card className="border-0 shadow-xl bg-card/60 backdrop-blur-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Name *</label>
                        <Input
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email *</label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Company</label>
                      <Input
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Inquiry Type *</label>
                      <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="sales">Sales Question</SelectItem>
                          <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="billing">Billing Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject *</label>
                      <Input
                        placeholder="Brief description of your inquiry"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Message *</label>
                      <Textarea
                        placeholder="Please provide details about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full h-12">
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
              <p className="text-muted-foreground mb-8">
                Visit us at one of our global locations or schedule a virtual meeting.
              </p>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-chart-1 to-chart-2 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{office.city}</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div>{office.address}</div>
                            <div>{office.zipcode}</div>
                            <div className="flex items-center gap-2 mt-2">
                              <Phone className="w-4 h-4" />
                              {office.phone}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Support Hours */}
              <Card className="mt-8 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Support Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                    <div className="pt-2 border-t border-border/50">
                      <div className="flex justify-between font-medium">
                        <span>Emergency Support</span>
                        <span>24/7 (Enterprise)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly do you respond to support requests?",
                answer:
                  "We aim to respond to all inquiries within 24 hours. Enterprise customers receive priority support with faster response times.",
              },
              {
                question: "Do you offer technical integration support?",
                answer:
                  "Yes, our technical team provides comprehensive integration support, including API documentation, code examples, and direct assistance.",
              },
              {
                question: "Can I schedule a demo or consultation?",
                answer:
                  "We offer personalized demos and consultations. Contact our sales team to schedule a session that fits your needs.",
              },
              {
                question: "What languages do you support for customer service?",
                answer:
                  "We provide support in English, Spanish, French, German, and Japanese. Additional language support is available for enterprise customers.",
              },
              {
                question: "Do you offer on-site training and implementation?",
                answer:
                  "Yes, we provide on-site training and implementation services for enterprise customers. Contact us to discuss your specific requirements.",
              },
              {
                question: "How do I report a bug or technical issue?",
                answer:
                  "You can report bugs through our support portal, email, or live chat. Please include detailed information about the issue for faster resolution.",
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
    </div>
  )
}
