"use client";

import { useQuizStore } from "@/lib/useQuizStore";
import { quizResults } from "@/lib/quizData";
import ResultCard from "@/components/ResultCard";

export default function ResultPage() {
  const { answers } = useQuizStore();

  const counts = answers.reduce<Record<string, number>>((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  const mostCommon = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
  const result = quizResults[mostCommon];

  if (!result)
    return <p className="text-center">Unable to calculate result.</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Yoga Pose Result</h1>
      <ResultCard title={result.title} description={result.description} />
    </div>
  );
}
