import Link from "next/link";
import Header from "../_components/Header";

export default function FeaturesPage() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "AI-Powered Enhancement",
      description: "Uses advanced Gemini AI to intelligently improve your prompts with better context, specificity, and clarity.",
      color: "blue"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Real-Time Processing",
      description: "Get enhanced prompts instantly with our real-time processing and beautiful typing animations.",
      color: "green"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "One-Click Copy",
      description: "Copy enhanced prompts to your clipboard with a single click for seamless integration with other tools.",
      color: "purple"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure & Private",
      description: "Your prompts are processed securely and are not stored permanently. Your privacy is our priority.",
      color: "red"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "User-Friendly Interface",
      description: "Clean, modern interface designed for the best user experience with intuitive controls and feedback.",
      color: "pink"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Responsive Design",
      description: "Works perfectly on desktop, tablet, and mobile devices with adaptive layouts and touch-friendly controls.",
      color: "indigo"
    }
  ];

  const useCases = [
    {
      title: "Creative & Content Generation",
      description: "Unleash your creativity. Generate compelling blog posts, viral social media content, captivating stories, and scripts.",
      examples: ["Generate a plot for a sci-fi short story", "Write a witty Twitter thread about AI", "Create a dialogue for a podcast episode"]
    },
    {
      title: "Code & Technical Solutions",
      description: "Accelerate your development workflow. Generate code snippets, debug complex problems, and get clear technical explanations.",
      examples: ["Write a Python script to scrape a website", "Explain this React component in simple terms", "Generate a SQL query to find active users"]
    },
    {
      title: "Business & Strategy",
      description: "Craft winning strategies. Improve marketing copy, draft professional emails, and brainstorm innovative business ideas.",
      examples: ["Draft a persuasive sales email to a new lead", "Analyze the SWOT for a new product idea", "Create a marketing slogan for a coffee brand"]
    },
    {
      title: "Learning & Exploration",
      description: "Master new topics faster. Get complex concepts explained simply, summarize research papers, and create custom learning plans.",
      examples: ["Explain Quantum Computing like I'm 15", "Summarize the key findings of this research paper...", "Create a 7-day study plan for learning JavaScript"]
    },
    {
      title: "Fun & Games",
      description: "Spark some fun. Create text-based adventure games, generate quiz questions, or get ideas for your next D&D campaign.",
      examples: ["Create a text-based adventure game in a haunted house", "Generate 5 trivia questions about 90s movies", "Design a D&D character backstory"]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      red: "bg-red-100 text-red-600",
      pink: "bg-pink-100 text-pink-600",
      indigo: "bg-indigo-100 text-indigo-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Powerful Features
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover what makes our AI Prompt Enhancer the perfect tool for improving your AI interactions.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Core Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2">
                <div className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-xl flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700">
                      &quot;{example}&quot;
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Prompt Enhancer?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-lg opacity-90">Better AI Responses</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3x</div>
                <div className="text-lg opacity-90">Faster Content Creation</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Privacy Protected</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Experience the Power?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start enhancing your prompts today and see the difference in your AI interactions.
            </p>
            <Link 
              href="/enhance"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Try It Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
