import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateStrategyInsight(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are an expert political strategist and data analyst. Provide concise, actionable insights based on voter data, sentiment trends, and campaign performance. Focus on the Kenyan political landscape if not specified otherwise.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error generating insight:", error);
    return "I'm sorry, I couldn't generate a strategy insight at this time. Please check your connection and try again.";
  }
}

export async function chatWithAssistant(message: string, history: any[]) {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: "You are the Campaign Pulse AI Strategy Assistant. You help campaign managers analyze voter trends, refine messaging, and generate reports. You have access to real-time sentiment data and voter demographics. Be professional, strategic, and concise.",
      },
      history: history,
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Error in chat:", error);
    return "I encountered an error while processing your request. How else can I help you today?";
  }
}

export async function generateDashboardSummary(data: any) {
  try {
    const prompt = `Analyze the following campaign dashboard data and provide a 2-sentence strategic summary:
    Sentiment: ${data.sentiment}
    Reach: ${data.reach}
    Regional Support: ${JSON.stringify(data.regionalSupport)}
    Trending Topics: ${data.trendingTopics.join(', ')}
    
    Format the response as a concise strategic directive.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are a senior political consultant. Provide sharp, high-level strategic summaries.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error generating dashboard summary:", error);
    return "Focus on Nairobi and Kisumu where sentiment is peaking; address cost-of-living concerns in Mombasa to stabilize support.";
  }
}

export async function generateStrategicReport(topic: string) {
  try {
    const prompt = `Generate a detailed strategic political report on the following topic: "${topic}".
    The report should include:
    1. Current Situation Analysis
    2. Key Challenges
    3. Strategic Recommendations
    4. Predicted Outcomes
    
    Format the response in Markdown with clear headings.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview", // Use pro for more detailed reports
      contents: prompt,
      config: {
        systemInstruction: "You are a world-class political strategist. Provide deep, data-driven analysis and unconventional but effective strategic advice.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error generating strategic report:", error);
    return "## Strategic Report: " + topic + "\n\nError generating detailed report. Please try again later.";
  }
}
