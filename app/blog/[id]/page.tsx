"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock blog post data - in a real app, this would come from a CMS or database
const getBlogPost = (id: string) => {
  const posts = {
    "1": {
      id: "1",
      title: "The Future of Voice AI: RAG Technology and Beyond",
      content: `
        <h2>Introduction</h2>
        <p>Retrieval-Augmented Generation (RAG) represents a paradigm shift in how voice AI systems process and respond to user queries. By combining the power of large language models with dynamic knowledge retrieval, RAG enables voice assistants to provide more accurate, contextual, and up-to-date responses.</p>
        
        <h2>How RAG Works in Voice AI</h2>
        <p>Traditional voice assistants rely on pre-trained models with static knowledge. RAG systems, however, can access and incorporate real-time information from various sources:</p>
        <ul>
          <li>Document databases and knowledge bases</li>
          <li>Real-time web searches</li>
          <li>Company-specific information repositories</li>
          <li>User conversation history and preferences</li>
        </ul>
        
        <h2>Benefits for Enterprise Applications</h2>
        <p>The integration of RAG technology in voice AI systems offers several key advantages for enterprise users:</p>
        <ul>
          <li><strong>Accuracy:</strong> Access to current, domain-specific information</li>
          <li><strong>Customization:</strong> Tailored responses based on company data</li>
          <li><strong>Scalability:</strong> Easy integration with existing knowledge systems</li>
          <li><strong>Compliance:</strong> Controlled access to sensitive information</li>
        </ul>
        
        <h2>Implementation Challenges</h2>
        <p>While RAG technology offers significant benefits, implementation comes with challenges:</p>
        <ul>
          <li>Latency considerations for real-time voice interactions</li>
          <li>Quality control of retrieved information</li>
          <li>Security and privacy concerns</li>
          <li>Integration complexity with existing systems</li>
        </ul>
        
        <h2>The Road Ahead</h2>
        <p>As RAG technology continues to evolve, we can expect to see even more sophisticated voice AI systems that can:</p>
        <ul>
          <li>Understand complex, multi-turn conversations</li>
          <li>Provide personalized responses based on user context</li>
          <li>Integrate seamlessly with business workflows</li>
          <li>Maintain consistency across different interaction channels</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>RAG technology is transforming the landscape of voice AI, making it more practical and valuable for real-world applications. As we continue to refine these systems, the future of human-computer interaction looks increasingly conversational and intelligent.</p>
      `,
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Technology",
      image: "/placeholder.svg?height=400&width=800",
    },
  }

  return posts[id] || null
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />

        <div className="relative max-w-4xl mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <Button size="sm" variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl overflow-hidden">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
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
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-0 shadow-xl bg-card/60 backdrop-blur-xl">
            <CardContent className="p-8 lg:p-12">
              <div
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for related articles */}
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/30" />
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">
                    Technology
                  </Badge>
                  <h3 className="font-semibold mb-2">Related Article Title {i}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Brief description of the related article...</p>
                  <Link href={`/blog/${i + 1}`}>
                    <Button variant="ghost" size="sm">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
