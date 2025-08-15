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
      "gemini-1.5-flash",
      "gemini-1.0-pro",
      "gemini-pro",
      "gemini-1.5-pro"
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
      throw new Error(`All model attempts failed. Last error: ${lastError?.message}`);
    }

    // Create the enhancement prompt
    const enhancementPrompt = `You are an expert at improving prompts for AI models. Your task is to enhance the following prompt to make it more detailed, specific, and effective.

Please improve the prompt by:
1. Adding more context and specificity
2. Including relevant examples if helpful
3. Making the instructions clearer and more actionable
4. Adding any missing important details
5. Maintaining the original intent while making it more comprehensive

Original prompt: "${prompt}"

Please provide only the enhanced prompt without any additional explanations or formatting.`;

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
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
