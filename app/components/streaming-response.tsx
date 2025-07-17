"use client"

import { useEffect, useState } from "react"

interface StreamingResponseProps {
  content: string
  isStreaming: boolean
}

export function StreamingResponse({ content, isStreaming }: StreamingResponseProps) {
  const [displayedContent, setDisplayedContent] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (isStreaming) {
      setDisplayedContent(content)
    } else {
      // Typewriter effect for final response
      if (currentIndex < content.length) {
        const timer = setTimeout(() => {
          setDisplayedContent(content.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        }, 20)
        return () => clearTimeout(timer)
      }
    }
  }, [content, isStreaming, currentIndex])

  useEffect(() => {
    if (!isStreaming) {
      setCurrentIndex(0)
      setDisplayedContent("")
    }
  }, [isStreaming])

  return (
    <div className="relative">
      <p className="text-green-800 dark:text-green-200 leading-relaxed whitespace-pre-wrap">
        {displayedContent}
        {isStreaming && <span className="inline-block w-2 h-5 bg-green-500 ml-1 animate-pulse" />}
      </p>

      {/* Streaming indicator */}
      {isStreaming && (
        <div className="absolute -top-2 -right-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          </div>
        </div>
      )}
    </div>
  )
}
