"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Option } from "@/lib/types";

interface Props {
  index: number;
  question: string;
  options: Option[];
  value?: string;
  onChange: (index: number, value: string) => void;
}

export default function QuizQuestionCard({
  index,
  question,
  options,
  value,
  onChange,
}: Props) {
  return (
    <div className="p-4 border rounded-xl shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <RadioGroup value={value} onValueChange={(val) => onChange(index, val)}>
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2 mb-2">
            <RadioGroupItem
              value={option.value}
              id={`${index}-${option.value}`}
            />
            <Label htmlFor={`${index}-${option.value}`}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
