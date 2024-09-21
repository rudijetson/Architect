export const calculateScore = (answers: string[]): number => {
    const score = answers.reduce((total, answer) => {
      if (answer === "Yes") return total + 2;
      if (answer === "Partially" || answer === "Some" || answer === "In progress" || answer === "In process") return total + 1;
      return total;
    }, 0);
    return Math.round((score / (answers.length * 2)) * 100);
  };
  
  export const getReadinessLevel = (score: number): string => {
    if (score >= 80) return "High";
    if (score >= 60) return "Moderate";
    return "Low";
  };
  
  export const getScoreComment = (score: number): string => {
    if (score >= 80) return "Great job! Your organization seems well-prepared for grant applications.";
    if (score >= 60) return "You're on the right track, but there's room for improvement in your grant readiness.";
    return "Consider working on your grant readiness before applying. ARCHITECT can help!";
  };