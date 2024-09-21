import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const QuizEmailForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setEmailSubmitted(true);
  };

  if (emailSubmitted) {
    return (
      <div className="p-4 bg-green-100 text-green-700 rounded-md flex items-center space-x-2">
        <CheckCircle2 className="w-5 h-5" />
        <span>Thank you! Check your inbox for more resources.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleEmailSubmit} className="space-y-4">
      <h4 className="text-xl font-semibold text-cyan-600">Get More Resources</h4>
      <p className="text-gray-700">Submit your email to receive tailored grant readiness tips.</p>
      <div className="flex space-x-2">
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow p-2 border border-gray-300 rounded-md"
        />
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
          Submit
        </button>
      </div>
    </form>
  );
};

export default QuizEmailForm;