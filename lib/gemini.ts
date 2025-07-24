"use server";

import {
  createGoogleGenerativeAI,
  GoogleGenerativeAIProviderOptions,
} from "@ai-sdk/google";
import { generateText } from "ai";
import { systemPrompt } from "@/constants";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GEMINI_API_KEY!,
});

const model = google("gemini-2.0-flash-thinking-exp-01-21", {
  // safetySettings: [
  //   { category: "HARM_CATEGORY_UNSPECIFIED", threshold: "BLOCK_LOW_AND_ABOVE" },
  // ],
});

export async function getAIResponse(
  prompt: string | KnowledgeEntity
): Promise<string | undefined> {
  try {
    const { text } = await generateText({
      model,
      providerOptions: {
        google: {
          responseModalities: ["TEXT"],
        } satisfies GoogleGenerativeAIProviderOptions,
      },
      system: systemPrompt,
      prompt: `${prompt}`,
    });

    // Validate ai response
    if (!text.startsWith("```json") || !text.endsWith("```")) {
      throw new Error("Error getting ai response");
    }

    const res = text.replace("```json", "").replace("```", "");
    return JSON.parse(res);
  } catch (error) {
    console.error(error);
    throw new Error("Error getting ai response");
  }
}
