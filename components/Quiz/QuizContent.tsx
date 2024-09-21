// Imports
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

// Types
interface QuizContentProps {
  onClose: () => void;
}

interface Question {
  question: string;
  options: string[];
  tip: string;
}

interface HelpfulLink {
  title: string;
  url: string;
  description: string;
}

// Constants
const questions: Question[] = [
  {
    question: "Does your organization have a clear mission statement?",
    options: ["Yes", "No", "Not sure"],
    tip: "A clear mission statement is crucial for grant applications. It helps funders understand your purpose and goals."
  },
  {
    question: "Do you have a detailed budget for your programs?",
    options: ["Yes", "No", "Partially"],
    tip: "A detailed budget demonstrates financial planning and helps funders understand how their money will be used."
  },
  {
    question: "Have you identified specific funding needs?",
    options: ["Yes", "No", "In progress"],
    tip: "Clearly defined funding needs show that you've thought through your project requirements."
  },
  {
    question: "Do you have a track record of successful program outcomes?",
    options: ["Yes", "No", "Some"],
    tip: "Demonstrating past successes increases credibility with potential funders."
  },
  {
    question: "Is your organization registered as a 501(c)(3)?",
    options: ["Yes", "No", "In process"],
    tip: "Many grants require 501(c)(3) status. If you're not registered, consider fiscal sponsorship options."
  }
];

const helpfulLinks: HelpfulLink[] = [
  {
    title: "Grant Writing 101",
    url: "/resources/grant-writing-101",
    description: "Learn the basics of effective grant writing."
  },
  {
    title: "Nonprofit Budget Template",
    url: "/resources/budget-template",
    description: "Download our free nonprofit budget template."
  },
  {
    title: "Program Evaluation Guide",
    url: "/resources/program-evaluation",
    description: "Discover how to measure and report program outcomes."
  }
];

// Component
const QuizContent: React.FC<QuizContentProps> = () => {
  // State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [showTip, setShowTip] = useState(false);

  // Effects
  useEffect(() => {
    const timer = setTimeout(() => setShowTip(true), 3000);
    return () => clearTimeout(timer);
  }, [currentQuestion]);

  // Handlers
  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    setShowTip(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setEmailSubmitted(true);
  };

  // Helper functions
  const calculateScore = (): number => {
    const score = answers.reduce((total, answer) => {
      if (answer === "Yes") return total + 2;
      if (answer === "Partially" || answer === "Some" || answer === "In progress" || answer === "In process") return total + 1;
      return total;
    }, 0);
    return Math.round((score / (questions.length * 2)) * 100);
  };

  const getReadinessLevel = (score: number): string => {
    if (score >= 80) return "High";
    if (score >= 60) return "Moderate";
    return "Low";
  };

  const getScoreComment = (score: number): string => {
    if (score >= 80) return "Great job! Your organization seems well-prepared for grant applications.";
    if (score >= 60) return "You're on the right track, but there's room for improvement in your grant readiness.";
    return "Consider working on your grant readiness before applying. ARCHITECT can help!";
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setEmailSubmitted(false);
    setShowTip(false);
  };

  // Render
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-cyan-600">Grant Readiness Quiz</h2>
      {!showResults ? (
        <>
          <div className="bg-gray-200 h-2 rounded-full">
            <div
              className="bg-cyan-500 h-2 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-800">{questions[currentQuestion].question}</h3>
              <div className="space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left p-3 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            {showTip && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 bg-yellow-100 rounded-md flex items-start space-x-2"
              >
                <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-700">{questions[currentQuestion].tip}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-cyan-600">Your Grant Readiness Score</h3>
            <div className="text-5xl font-bold text-yellow-500">{calculateScore()}%</div>
            <p className="text-lg">
              Readiness Level: <strong className="text-cyan-600">{getReadinessLevel(calculateScore())}</strong>
            </p>
          </div>
          <p className="text-lg text-gray-700">{getScoreComment(calculateScore())}</p>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-cyan-600">Helpful Resources</h4>
            {helpfulLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="block p-3 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <div className="font-semibold text-cyan-600">{link.title}</div>
                <div className="text-sm text-gray-600">{link.description}</div>
              </a>
            ))}
          </div>
          {!emailSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <h4 className="text-xl font-semibold text-cyan-600">Get More Resources</h4>
              <p className="text-gray-700">Submit your email to receive tailored grant readiness tips.</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email} 
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  required
                  className="flex-grow p-2 border border-gray-300 rounded-md"
                />
                <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="p-4 bg-green-100 text-green-700 rounded-md flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Thank you! Check your inbox for more resources.</span>
            </div>
          )}
        </div>
      )}
      <div className="flex justify-between">
        {!showResults ? (
          <>
            <button 
              onClick={() => {
                setCurrentQuestion(Math.max(0, currentQuestion - 1));
                setShowTip(false);
              }} 
              disabled={currentQuestion === 0}
              className="text-cyan-600 hover:text-cyan-700 disabled:opacity-50"
            >
              Previous
            </button>
            <button 
              onClick={() => handleAnswer(questions[currentQuestion].options[0])}
              className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors"
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </>
        ) : (
          <button 
            onClick={restartQuiz}
            className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors"
          >
            Restart Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizContent;