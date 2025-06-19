"use client";

import { useQuizStore } from "@/lib/useQuizStore";
import { quizQuestions } from "@/lib/quizData";
import QuizQuestionCard from "@/components/QuizQuestionCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function QuizPage() {
  const { answers, setAnswer } = useQuizStore();
  const router = useRouter();

  const handleSubmit = () => {
    const complete =
      quizQuestions.length === answers.length && answers.every(Boolean);
    if (complete) {
      router.push("/result");
    } else {
      alert("Please answer all questions!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Quiz</h1>
      {quizQuestions.map((q, i) => (
        <QuizQuestionCard
          key={i}
          index={i}
          question={q.question}
          options={q.options}
          value={answers[i]}
          onChange={setAnswer}
        />
      ))}
      <Button onClick={handleSubmit}>See My Pose</Button>
    </div>
  );
}
