import React from 'react';

interface QuizProgressProps {
  current: number;
  total: number;
}

const QuizProgress: React.FC<QuizProgressProps> = ({ current, total }) => {
  return (
    <div className="bg-gray-200 h-2 rounded-full">
      <div
        className="bg-cyan-500 h-2 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${(current / total) * 100}%` }}
      ></div>
    </div>
  );
};

export default QuizProgress;