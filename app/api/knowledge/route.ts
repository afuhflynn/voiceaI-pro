import { type NextRequest, NextResponse } from "next/server"

// Simulated knowledge base storage
const knowledgeBase: any[] = [
  {
    id: "1",
    title: "Server Performance Optimization",
    content:
      "To optimize server performance, monitor CPU usage, memory consumption, and disk I/O. Implement caching strategies and load balancing.",
    category: "Performance",
    tags: ["server", "optimization", "performance"],
    domain: "Technical Support",
  },
  {
    id: "2",
    title: "Database Connection Issues",
    content:
      "Common database connection problems include timeout errors, connection pool exhaustion, and network connectivity issues.",
    category: "Database",
    tags: ["database", "connection", "troubleshooting"],
    domain: "Technical Support",
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const domain = searchParams.get("domain")

  const filteredItems = domain ? knowledgeBase.filter((item) => item.domain === domain) : knowledgeBase

  return NextResponse.json({ items: filteredItems })
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const newItem = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString(),
    }

    knowledgeBase.push(newItem)

    return NextResponse.json({ success: true, item: newItem })
  } catch (error) {
    return NextResponse.json({ error: "Failed to add knowledge item" }, { status: 500 })
  }
}
