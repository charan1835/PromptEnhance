import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || !prompt.trim()) {
      return Response.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.GEMINI_API_KEY) {
      return Response.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Try different model names in order of preference
    const modelNames = [
      "gemini-2.5-flash",
      "gemini-1.5-pro-latest",
      "gemini-1.5-flash-latest"
    ];

    let model;
    let lastError;

    for (const modelName of modelNames) {
      try {
        model = genAI.getGenerativeModel({ model: modelName });
        // Test if the model works by making a simple call
        const testResult = await model.generateContent("Hello");
        await testResult.response;
        break;
      } catch (error) {
        lastError = error;
        continue;
      }
    }

    if (!model) {
      throw new Error(
        `Failed to initialize any of the attempted models: ${modelNames.join(', ')}. Last error: ${lastError?.message}`
      );
    }

    // Create the enhancement prompt
    const enhancementPrompt = `You are a world-class AI prompt engineer. Your task is to refine and transform ANY user's prompt into a perfect, high-quality, professional-grade prompt that would score 10/10 for clarity, specificity, and effectiveness.

**Universal Instructions:**
1. **Understand the Core Objective:** Identify the exact goal the user wants to achieve, regardless of the domain (writing, coding, design, analytics, research, etc.).
2. **Clarify Ambiguities:** Detect vague or incomplete statements and transform them into precise, actionable instructions.
3. **Add Context and Constraints:** Include any relevant background, requirements, or constraints that improve AI understanding (e.g., style, tone, format, technical limitations, audience, purpose).
4. **Enhance Structure and Readability:** Organize the prompt logically. Use headings, numbered steps, or bullet points if it improves clarity and execution.
5. **Increase Specificity:** Replace general terms with exact instructions. Specify outputs, formats, examples, or parameters where relevant.
6. **Include Illustrative Examples:** If helpful, provide one concise example that demonstrates the expected output style or content.
7. **Maintain Original Intent:** Do not alter the core goal or scope. The enhanced prompt should strictly preserve the user’s intended outcome.
8. **Universal Applicability:** The enhanced prompt must be applicable for any type of AI task or field, from creative writing to programming, design, data analysis, or business strategy.
9. **Conciseness:** Be concise without losing necessary details. Avoid unnecessary filler while preserving clarity.
10. **Tone and Style Guidance:** Suggest tone, style, or perspective when relevant (e.g., professional, casual, technical, friendly, persuasive).

**Input Prompt:**
"${prompt}"

**Output Format:**
Provide ONLY the enhanced prompt as raw text, fully polished and ready-to-use. Do NOT include explanations, markdown formatting, or any extra text.`;

    // Generate the enhanced prompt
    const result = await model.generateContent(enhancementPrompt);
    const response = await result.response;
    const enhancedPrompt = response.text();

    return Response.json({
      enhancedPrompt: enhancedPrompt.trim(),
      success: true
    });

  } catch (error) {
    console.error('Error enhancing prompt:', error);

    return Response.json(
      {
        error: 'Failed to enhance prompt. Please try again.',
        details: error.message
      },
      { status: 500 }
    );
  }
}
