"use client"
import { Mic, Brain, Volume2, Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface StatusIndicatorProps {
  status: string
}

export function StatusIndicator({ status }: StatusIndicatorProps) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "ready":
        return {
          icon: CheckCircle,
          color: "bg-green-500",
          bgColor: "bg-green-50 dark:bg-green-950/30",
          textColor: "text-green-700 dark:text-green-300",
          borderColor: "border-green-200 dark:border-green-800",
          label: "Ready to assist",
        }
      case "listening":
        return {
          icon: Mic,
          color: "bg-blue-500",
          bgColor: "bg-blue-50 dark:bg-blue-950/30",
          textColor: "text-blue-700 dark:text-blue-300",
          borderColor: "border-blue-200 dark:border-blue-800",
          label: "Listening...",
        }
      case "processing":
        return {
          icon: Loader2,
          color: "bg-yellow-500",
          bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
          textColor: "text-yellow-700 dark:text-yellow-300",
          borderColor: "border-yellow-200 dark:border-yellow-800",
          label: "Processing audio",
        }
      case "thinking":
        return {
          icon: Brain,
          color: "bg-purple-500",
          bgColor: "bg-purple-50 dark:bg-purple-950/30",
          textColor: "text-purple-700 dark:text-purple-300",
          borderColor: "border-purple-200 dark:border-purple-800",
          label: "Thinking...",
        }
      case "speaking":
        return {
          icon: Volume2,
          color: "bg-green-500",
          bgColor: "bg-green-50 dark:bg-green-950/30",
          textColor: "text-green-700 dark:text-green-300",
          borderColor: "border-green-200 dark:border-green-800",
          label: "Speaking",
        }
      case "error":
        return {
          icon: AlertCircle,
          color: "bg-red-500",
          bgColor: "bg-red-50 dark:bg-red-950/30",
          textColor: "text-red-700 dark:text-red-300",
          borderColor: "border-red-200 dark:border-red-800",
          label: "Error occurred",
        }
      default:
        return {
          icon: CheckCircle,
          color: "bg-gray-500",
          bgColor: "bg-gray-50 dark:bg-gray-950/30",
          textColor: "text-gray-700 dark:text-gray-300",
          borderColor: "border-gray-200 dark:border-gray-800",
          label: "Unknown status",
        }
    }
  }

  const config = getStatusConfig(status)
  const Icon = config.icon

  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${config.bgColor} ${config.borderColor} border backdrop-blur-sm`}
    >
      <div className="relative">
        <div className={`w-3 h-3 rounded-full ${config.color} animate-pulse`} />
        <div className={`absolute inset-0 w-3 h-3 rounded-full ${config.color} animate-ping opacity-75`} />
      </div>

      <Icon className={`w-4 h-4 ${config.textColor} ${status === "processing" ? "animate-spin" : ""}`} />

      <span className={`text-sm font-medium ${config.textColor}`}>{config.label}</span>
    </div>
  )
}
