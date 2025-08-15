# Prompt Enhancer Setup Guide

## Prerequisites
- Node.js (version 18 or higher)
- npm or yarn
- Gemini AI API key

## Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Setup

1. Create a `.env.local` file in the root directory
2. Add your Gemini API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

## Getting a Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key
5. Paste it in your `.env.local` file

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- **Prompt Enhancement**: Transform basic prompts into detailed, effective instructions
- **Real-time Processing**: Uses Gemini AI for intelligent prompt improvement
- **Copy to Clipboard**: Easy copying of enhanced prompts
- **Responsive Design**: Works on desktop and mobile devices
- **Error Handling**: Graceful error handling and user feedback

## How to Use

1. Enter your original prompt in the text area
2. Click "Enhance Prompt" to process it with Gemini AI
3. View the enhanced prompt in the output area
4. Copy the enhanced prompt to your clipboard
5. Use the enhanced prompt for better AI model results

## API Endpoints

- `POST /api/enhance` - Enhances a prompt using Gemini AI
  - Body: `{ "prompt": "your prompt here" }`
  - Response: `{ "enhancedPrompt": "enhanced version", "success": true }`

## Troubleshooting

- **"Gemini API key not configured"**: Make sure your `.env.local` file exists and contains the correct API key
- **"Failed to enhance prompt"**: Check your internet connection and API key validity
- **Build errors**: Ensure all dependencies are installed with `npm install`
