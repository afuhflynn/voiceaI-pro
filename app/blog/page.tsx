"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const featuredPost = {
    id: "1",
    title: "The Future of Voice AI: RAG Technology and Beyond",
    excerpt:
      "Explore how Retrieval-Augmented Generation is revolutionizing voice assistants and what it means for the future of human-computer interaction.",
    content: "Full article content would go here...",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=800",
    featured: true,
  }

  const blogPosts = [
    {
      id: "2",
      title: "Building Scalable Voice Applications with Next.js",
      excerpt: "A comprehensive guide to creating production-ready voice applications using modern web technologies.",
      author: "Marcus Rodriguez",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Development",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: "3",
      title: "Voice Privacy and Security: Best Practices",
      excerpt: "Essential security considerations when implementing voice AI in enterprise environments.",
      author: "Dr. Aisha Patel",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Security",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: "4",
      title: "Optimizing Voice Recognition for Different Domains",
      excerpt: "How domain-specific training improves accuracy in specialized voice applications.",
      author: "James Kim",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "AI Research",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: "5",
      title: "The Economics of Voice AI Implementation",
      excerpt: "ROI analysis and cost considerations for businesses adopting voice AI technology.",
      author: "Dr. Sarah Chen",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Business",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: "6",
      title: "Multi-language Voice Processing Challenges",
      excerpt: "Technical deep-dive into handling multiple languages in voice AI systems.",
      author: "Dr. Aisha Patel",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Technology",
      image: "/placeholder.svg?height=300&width=600",
    },
  ]

  const categories = ["All", "Technology", "Development", "Security", "AI Research", "Business"]

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
            <BookOpen className="w-4 h-4 mr-2" />
            VoiceAI Pro Blog
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Insights & Updates
            </span>
            <br />
            <span className="bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
              From Our Team
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay up-to-date with the latest developments in voice AI technology, industry insights, and product updates
            from our expert team.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
          </div>

          <Card className="border-0 shadow-2xl bg-card/60 backdrop-blur-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-muted/50 to-muted/30 flex items-center justify-center">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
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
                  <BookOpen className="w-16 h-16 text-muted-foreground" />
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Link href={`/blog/${featuredPost.id}`}>
                  <Button size="lg" className="w-fit">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-4 py-2 cursor-pointer hover:bg-muted/50 transition-colors bg-background/50 backdrop-blur-sm"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-muted-foreground text-lg">
              {searchQuery
                ? `Found ${filteredPosts.length} article${filteredPosts.length !== 1 ? "s" : ""} matching "${searchQuery}"`
                : "Explore our latest insights and technical deep-dives"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="group border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/30 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                      e.currentTarget.nextElementSibling.style.display = "flex"
                    }}
                  />
                  <div
                    className="w-full h-full bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <BookOpen className="w-12 h-12 text-muted-foreground" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 group-hover:text-chart-1 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base line-clamp-3 mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`} className="block mt-4">
                    <Button variant="ghost" size="sm" className="w-full group-hover:bg-muted/50">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search query or browse all categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest articles, product updates, and industry insights delivered to
            your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email" className="h-12 bg-background/50 backdrop-blur-sm" />
            <Button size="lg" className="h-12 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
