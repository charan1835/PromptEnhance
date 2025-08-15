import Link from "next/link";
import Header from "../_components/Header";

export default function AboutPage() {
  const team = [
    {
      name: "AI Development Team",
      role: "Core Development",
      description: "Expert developers specializing in AI integration and modern web technologies."
    },
    {
      name: "UX Design Team",
      role: "User Experience",
      description: "Dedicated to creating intuitive and beautiful user interfaces."
    },
    {
      name: "AI Research Team",
      role: "AI Optimization",
      description: "Focused on optimizing AI models for the best prompt enhancement results."
    }
  ];

  const technologies = [
    {
      name: "Next.js",
      description: "Modern React framework for building fast, scalable web applications",
      icon: "⚛️"
    },
    {
      name: "Gemini AI",
      description: "Google's advanced AI model for intelligent prompt enhancement",
      icon: "🤖"
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
      icon: "🎨"
    },
    {
      name: "TypeScript",
      description: "Type-safe JavaScript for better code quality and developer experience",
      icon: "📝"
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              About Our Tool
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn about the technology, mission, and team behind the AI Prompt Enhancer.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that the quality of AI interactions depends heavily on how well we communicate with AI models. 
                Our mission is to bridge the gap between human intent and AI understanding by providing intelligent prompt enhancement.
              </p>
              <p className="text-lg text-gray-600">
                The AI Prompt Enhancer was created to help users get better results from AI models like ChatGPT, Claude, 
                and others by transforming basic prompts into detailed, context-rich instructions that AI can better understand and respond to.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              How Our AI Enhancement Works
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Input Analysis</h3>
                <p className="text-gray-600">
                  When you submit a prompt, our system analyzes the content to understand the intent, context, and areas for improvement.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">2. AI Enhancement</h3>
                <p className="text-gray-600">
                  Using Google's Gemini AI, we enhance your prompt by adding context, specificity, examples, and clearer instructions.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">3. Quality Output</h3>
                <p className="text-gray-600">
                  The enhanced prompt is returned with improved structure and clarity, ready to use with any AI model.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Privacy First</h3>
                <p className="text-gray-600">
                  We prioritize your privacy. Your prompts are processed securely and are not stored permanently on our servers.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">User Experience</h3>
                <p className="text-gray-600">
                  We focus on creating intuitive, beautiful interfaces that make AI enhancement accessible to everyone.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Continuous Improvement</h3>
                <p className="text-gray-600">
                  We constantly update our AI models and features to provide the best possible enhancement results.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Accessibility</h3>
                <p className="text-gray-600">
                  Our tool is designed to work for everyone, regardless of their technical background or experience level.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the power of AI-enhanced prompts and improve your AI interactions today.
            </p>
            <Link 
              href="/enhance"
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Start Enhancing
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
