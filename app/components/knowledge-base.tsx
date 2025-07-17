"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Database, Plus, Search, BookOpen, Sparkles } from "lucide-react"

interface KnowledgeItem {
  id: string
  title: string
  content: string
  category: string
  tags: string[]
  relevanceScore?: number
}

interface KnowledgeBaseProps {
  domainExpertise: string
}

export function KnowledgeBase({ domainExpertise }: KnowledgeBaseProps) {
  const [knowledgeItems, setKnowledgeItems] = useState<KnowledgeItem[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [newItem, setNewItem] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
  })
  const [showAddForm, setShowAddForm] = useState(false)

  useEffect(() => {
    loadKnowledgeBase()
  }, [domainExpertise])

  const loadKnowledgeBase = async () => {
    try {
      const response = await fetch(`/api/knowledge?domain=${encodeURIComponent(domainExpertise)}`)
      if (response.ok) {
        const data = await response.json()
        setKnowledgeItems(data.items || [])
      }
    } catch (error) {
      console.error("Error loading knowledge base:", error)
    }
  }

  const addKnowledgeItem = async () => {
    if (!newItem.title || !newItem.content) return

    try {
      const response = await fetch("/api/knowledge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newItem,
          domain: domainExpertise,
          tags: newItem.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
        }),
      })

      if (response.ok) {
        await loadKnowledgeBase()
        setNewItem({ title: "", content: "", category: "", tags: "" })
        setShowAddForm(false)
      }
    } catch (error) {
      console.error("Error adding knowledge item:", error)
    }
  }

  const searchKnowledge = async () => {
    if (!searchQuery.trim()) {
      loadKnowledgeBase()
      return
    }

    try {
      const response = await fetch("/api/knowledge/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: searchQuery,
          domain: domainExpertise,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setKnowledgeItems(data.results || [])
      }
    } catch (error) {
      console.error("Error searching knowledge base:", error)
    }
  }

  const filteredItems = knowledgeItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Database className="w-6 h-6 text-chart-2" />
          Knowledge Base
        </CardTitle>
        <CardDescription className="text-base">
          RAG-enabled knowledge repository for {domainExpertise} domain expertise
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search knowledge base..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && searchKnowledge()}
              className="pl-8"
            />
          </div>
          <Button onClick={searchKnowledge} variant="outline">
            Search
          </Button>
        </div>

        {/* Add New Item */}
        <div className="space-y-3">
          <Button onClick={() => setShowAddForm(!showAddForm)} variant="outline" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Add Knowledge Item
          </Button>

          {showAddForm && (
            <div className="space-y-4 p-5 border rounded-lg bg-muted/50">
              <Input
                placeholder="Title"
                value={newItem.title}
                onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
              />
              <Input
                placeholder="Category"
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              />
              <Textarea
                placeholder="Content"
                value={newItem.content}
                onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
                rows={4}
              />
              <Input
                placeholder="Tags (comma-separated)"
                value={newItem.tags}
                onChange={(e) => setNewItem({ ...newItem, tags: e.target.value })}
              />
              <div className="flex justify-end gap-2">
                <Button onClick={() => setShowAddForm(false)} variant="ghost">
                  Cancel
                </Button>
                <Button onClick={addKnowledgeItem}>
                  Add Item
                  <Sparkles className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Knowledge Items */}
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <BookOpen className="w-8 h-8 mx-auto mb-2" />
                <p>No knowledge items found.</p>
                <p className="text-sm">Add some items to enhance the agent's expertise.</p>
              </div>
            ) : (
              filteredItems.map((item) => (
                <div key={item.id} className="rounded-lg p-4 bg-secondary/50">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    {item.relevanceScore && (
                      <Badge variant="secondary">{Math.round(item.relevanceScore * 100)}% match</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{item.content}</p>
                  <div className="flex items-center gap-2 mt-2">
                    {item.category && <Badge variant="outline">{item.category}</Badge>}
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
