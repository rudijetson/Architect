import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface QuizQuestionProps {
  question: {
    question: string;
    options: string[];
    tip: string;
  };
  onAnswer: (answer: string) => void;
  onPrevious: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswer,
  onPrevious,
  isFirstQuestion,
  isLastQuestion,
}) => {
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTip(true), 3000);
    return () => clearTimeout(timer);
  }, [question]);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800">{question.question}</h3>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full text-left p-3 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-4 bg-yellow-100 rounded-md flex items-start space-x-2"
          >
            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
            <p className="text-sm text-gray-700">{question.tip}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex justify-between">
        <button 
          onClick={onPrevious}
          disabled={isFirstQuestion}
          className="text-cyan-600 hover:text-cyan-700 disabled:opacity-50"
        >
          Previous
        </button>
        <button 
          onClick={() => onAnswer(question.options[0])}
          className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors"
        >
          {isLastQuestion ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default QuizQuestion;