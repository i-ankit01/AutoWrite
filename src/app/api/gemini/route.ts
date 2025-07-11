import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    const text = result?.candidates?.[0]?.content?.parts?.[0].text;

    if (!text) {
      return NextResponse.json(
        { error: "No content generated" },
        { status: 500 }
      );
    }

    return NextResponse.json({ text });
    
  } catch (error: any) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  return NextResponse.json({
    message: "server is running ",
  });
}
