import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, domain, conversationHistory } = await request.json()

    // Retrieve relevant knowledge from RAG system
    const relevantKnowledge = await retrieveRelevantKnowledge(message, domain)

    // Build context with conversation history and RAG knowledge
    const systemPrompt = buildSystemPrompt(domain, relevantKnowledge, conversationHistory)

    const result = streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
      maxTokens: 500,
    })

    // Store conversation for continuous learning
    await storeConversation(message, domain, conversationHistory)

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error generating response:", error)
    return new Response("Error generating response", { status: 500 })
  }
}

async function retrieveRelevantKnowledge(query: string, domain: string) {
  // Simulate RAG retrieval
  // In production, you would:
  // 1. Convert query to embeddings
  // 2. Search vector database
  // 3. Retrieve most relevant documents

  const knowledgeBase = {
    "Technical Support": [
      "Server troubleshooting involves checking logs, monitoring resources, and verifying configurations.",
      "Database optimization requires indexing, query analysis, and connection pooling.",
      "API authentication should use OAuth 2.0 or JWT tokens for security.",
    ],
    Legal: [
      "Contract law governs agreements between parties and their enforceability.",
      "Liability limitations must be clearly stated and legally compliant.",
      "Compliance requirements vary by jurisdiction and industry.",
    ],
    Medical: [
      "Diagnosis requires careful evaluation of symptoms and medical history.",
      "Treatment plans should be evidence-based and patient-specific.",
      "Medication interactions must be carefully monitored.",
    ],
    Education: [
      "Curriculum design should align with learning objectives and standards.",
      "Assessment methods should be varied and authentic.",
      "Student engagement improves with interactive and relevant content.",
    ],
  }

  return knowledgeBase[domain as keyof typeof knowledgeBase] || []
}

function buildSystemPrompt(domain: string, knowledge: string[], conversationHistory: any[]) {
  const basePrompt = `You are an expert AI assistant specializing in ${domain}. You provide accurate, helpful, and professional responses.`

  const knowledgeContext = knowledge.length > 0 ? `\n\nRelevant knowledge:\n${knowledge.join("\n")}` : ""

  const historyContext =
    conversationHistory.length > 0
      ? `\n\nRecent conversation context:\n${conversationHistory
          .map((conv) => `User: ${conv.userInput}\nAssistant: ${conv.agentResponse}`)
          .join("\n\n")}`
      : ""

  return `${basePrompt}${knowledgeContext}${historyContext}

Guidelines:
- Provide specific, actionable advice
- Use domain-appropriate terminology
- Reference relevant knowledge when applicable
- Keep responses concise but comprehensive
- Ask clarifying questions when needed`
}

async function storeConversation(message: string, domain: string, history: any[]) {
  // Store conversation for continuous learning
  // In production, you would save to database for:
  // 1. Training data collection
  // 2. Performance analytics
  // 3. Knowledge base updates

  console.log("Storing conversation for learning:", {
    message,
    domain,
    timestamp: new Date().toISOString(),
  })
}
