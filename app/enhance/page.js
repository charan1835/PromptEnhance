'use client';
import { useState, useEffect } from "react";
import Header from "../_components/Header";

export default function EnhancePage() {
  const [originalPrompt, setOriginalPrompt] = useState('');
  const [enhancedPrompt, setEnhancedPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Character count for original prompt
  const charCount = originalPrompt.length;
  const maxChars = 2000;

  // Prompt examples for different use cases
  const promptExamples = [
    {
      category: "Content Creation",
      examples: [
        "Write a blog post about sustainable living",
        "Create a social media post for a new product launch",
        "Generate a story about a time traveler",
        "Write an email newsletter about industry trends",
        "Create a product description for an eco-friendly water bottle"
      ]
    },
    {
      category: "Business & Marketing",
      examples: [
        "Write a sales pitch for a software solution",
        "Create a marketing campaign for a fitness app",
        "Draft a business proposal for investors",
        "Write a customer service response",
        "Create a brand story for a startup"
      ]
    },
    {
      category: "Academic & Research",
      examples: [
        "Explain quantum computing to a beginner",
        "Write a research summary on climate change",
        "Create a lesson plan for teaching coding",
        "Explain the concept of machine learning",
        "Write an academic paper introduction"
      ]
    },
    {
      category: "Technical Writing",
      examples: [
        "Write documentation for a React component",
        "Create a tutorial on building a REST API",
        "Explain how to deploy a web application",
        "Write a troubleshooting guide for network issues",
        "Create a user manual for a mobile app"
      ]
    },
    {
      category: "Creative Writing",
      examples: [
        "Write a poem about artificial intelligence",
        "Create a character backstory for a fantasy novel",
        "Write a dialogue between two robots",
        "Create a setting description for a sci-fi story",
        "Write a short story about a magical library"
      ]
    },
    {
      category: "Professional",
      examples: [
        "Write a professional bio for LinkedIn",
        "Create a job description for a developer position",
        "Draft a meeting agenda for a project kickoff",
        "Write a performance review template",
        "Create a company mission statement"
      ]
    }
  ];

  // Real-time typing effect for enhanced prompt
  useEffect(() => {
    if (enhancedPrompt && !isLoading) {
      setIsTyping(true);
      setTypingText('');
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < enhancedPrompt.length) {
          setTypingText(enhancedPrompt.substring(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          setShowSuccess(true);
          clearInterval(typeInterval);
          setTimeout(() => setShowSuccess(false), 3000);
        }
      }, 8); // Reduced from 20ms to 8ms for faster typing
      return () => clearInterval(typeInterval);
    }
  }, [enhancedPrompt, isLoading]);

  const enhancePrompt = async () => {
    if (!originalPrompt.trim()) {
      setError('Please enter a prompt to enhance');
      return;
    }

    setIsLoading(true);
    setError('');
    setEnhancedPrompt('');
    setTypingText('');
    setIsTyping(false);
    setShowSuccess(false);

    try {
      const response = await fetch('/api/enhance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: originalPrompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to enhance prompt');
      }

      const data = await response.json();
      setEnhancedPrompt(data.enhancedPrompt);
    } catch (err) {
      setError('Error enhancing prompt. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (enhancedPrompt) {
      try {
        await navigator.clipboard.writeText(enhancedPrompt);
        // Show success feedback
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const clearAll = () => {
    setOriginalPrompt('');
    setEnhancedPrompt('');
    setError('');
    setTypingText('');
    setIsTyping(false);
    setShowSuccess(false);
  };

  const useExample = (example) => {
    setOriginalPrompt(example);
    setError('');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Prompt Enhancement Tool
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your basic prompts into powerful, detailed instructions using Gemini AI for better results.
            </p>
          </header>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Original Prompt Section */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      Original Prompt
                    </h2>
                    <div className="text-sm text-gray-500">
                      {charCount}/{maxChars}
                    </div>
                  </div>
                  <textarea
                    value={originalPrompt}
                    onChange={(e) => {
                      setOriginalPrompt(e.target.value);
                      setError('');
                    }}
                    maxLength={maxChars}
                    className="w-full h-48 p-6 border-2 border-gray-200 rounded-xl resize-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-gray-700 placeholder-gray-400"
                    placeholder="Enter your original prompt here... (e.g., 'Write a story about a robot')"
                    disabled={isLoading}
                  />
                  {error && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {error}
                      </p>
                    </div>
                  )}
                  <div className="mt-6">
                    <button 
                      onClick={enhancePrompt}
                      disabled={isLoading || !originalPrompt.trim() || charCount > maxChars}
                      className={`w-full font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 ${
                        isLoading || !originalPrompt.trim() || charCount > maxChars
                          ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Enhancing...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <span>Enhance Prompt</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Prompt Examples Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Try These Examples
                  </h3>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {promptExamples.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-2">
                        <h4 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
                          {category.category}
                        </h4>
                        <div className="space-y-2">
                          {category.examples.map((example, exampleIndex) => (
                            <button
                              key={exampleIndex}
                              onClick={() => useExample(example)}
                              className="w-full text-left p-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-200"
                            >
                              "{example}"
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Prompt Section */}
            <div className="mt-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Enhanced Prompt
                  </h2>
                  {isTyping && (
                    <div className="flex items-center gap-2 text-sm text-blue-600">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                      <span>Typing...</span>
                    </div>
                  )}
                </div>
                <div className="w-full min-h-48 p-6 border-2 border-gray-200 rounded-xl bg-gray-50 relative">
                  {enhancedPrompt ? (
                    <div className="relative">
                      <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                        {typingText}
                        {isTyping && <span className="animate-pulse">|</span>}
                      </p>
                      {showSuccess && (
                        <div className="absolute top-2 right-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium animate-fade-in">
                          ✓ Enhanced!
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center text-gray-400">
                        <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="text-lg font-medium">Your enhanced prompt will appear here</p>
                        <p className="text-sm">Enter a prompt and click enhance to get started</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-6 flex gap-3">
                  <button 
                    onClick={copyToClipboard}
                    disabled={!enhancedPrompt}
                    className={`flex-1 font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${
                      enhancedPrompt 
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5' 
                        : 'bg-gray-300 cursor-not-allowed text-gray-500'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy to Clipboard
                  </button>
                  <button 
                    onClick={clearAll}
                    className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
