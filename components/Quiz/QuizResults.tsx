import React from 'react';
import { helpfulLinks } from '../../constants/quizData';
import QuizEmailForm from './QuizEmailForm';

interface QuizResultsProps {
  score: number;
  readinessLevel: string;
  comment: string;
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ score, readinessLevel, comment, onRestart }) => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-cyan-600">Your Grant Readiness Score</h3>
        <div className="text-5xl font-bold text-yellow-500">{score}%</div>
        <p className="text-lg">
          Readiness Level: <strong className="text-cyan-600">{readinessLevel}</strong>
        </p>
      </div>
      <p className="text-lg text-gray-700">{comment}</p>
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
      <QuizEmailForm />
      <button 
        onClick={onRestart}
        className="w-full bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default QuizResults;