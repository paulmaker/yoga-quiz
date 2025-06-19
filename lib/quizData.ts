import { Question, Result } from "./types";

export const quizQuestions: Question[] = [
  {
    question: "What’s your ideal weekend activity?",
    options: [
      { label: "Chilling at home with a book or show", value: "A" },
      { label: "Hiking or hitting the gym", value: "B" },
      { label: "Going to a spa or practicing self-care", value: "C" },
      { label: "Meeting up with friends for something fun", value: "D" },
      { label: "Journaling or meditating in peace", value: "E" },
    ],
  },
  {
    question: "How do you handle stress?",
    options: [
      { label: "I stay calm and go with the flow", value: "A" },
      { label: "I move my body to shake it off", value: "B" },
      { label: "I slow down and focus on deep breathing", value: "C" },
      { label: "I talk it out with someone", value: "D" },
      { label: "I reflect and try to understand the root cause", value: "E" },
    ],
  },
  {
    question: "Pick a word that best describes you:",
    options: [
      { label: "Steady", value: "A" },
      { label: "Strong", value: "B" },
      { label: "Relaxed", value: "C" },
      { label: "Playful", value: "D" },
      { label: "Grounded", value: "E" },
    ],
  },
  {
    question: "What’s your energy like in the mornings?",
    options: [
      { label: "Slow and steady", value: "A" },
      { label: "High and ready to go", value: "B" },
      { label: "Sleepy but peaceful", value: "C" },
      { label: "Bubbly and chatty", value: "D" },
      { label: "Focused and centred", value: "E" },
    ],
  },
  {
    question: "What element do you feel most connected to?",
    options: [
      { label: "Earth", value: "A" },
      { label: "Fire", value: "B" },
      { label: "Water", value: "C" },
      { label: "Air", value: "D" },
      { label: "Ether/Space", value: "E" },
    ],
  },
  {
    question: "Choose your favourite way to connect with yourself:",
    options: [
      { label: "A quiet yoga flow", value: "A" },
      { label: "A powerful workout", value: "B" },
      { label: "A warm bath and candles", value: "C" },
      { label: "Dancing or laughing with others", value: "D" },
      { label: "Writing, praying, or meditating", value: "E" },
    ],
  },
];

export const quizResults: Record<string, Result> = {
  A: {
    title: "Mountain Pose (Tadasana)",
    description:
      "You’re grounded, reliable and calm. Like Mountain Pose, you’re a steady presence and a great foundation for those around you.",
  },
  B: {
    title: "Warrior II (Virabhadrasana II)",
    description:
      "You’re strong, bold and determined. Warrior II suits your courageous spirit and your readiness to take on anything life throws at you.",
  },
  C: {
    title: "Child’s Pose (Balasana)",
    description:
      "You’re nurturing, peaceful and in tune with your need for rest. You know how to slow down and create space for self-care.",
  },
  D: {
    title: "Dancer Pose (Natarajasana)",
    description:
      "You’re expressive, fun-loving and full of creative energy. Dancer Pose reflects your playful nature and your graceful adaptability.",
  },
  E: {
    title: "Tree Pose (Vrksasana)",
    description:
      "You’re introspective, balanced and thoughtful. Tree Pose represents your spiritual depth and your desire to grow while staying rooted.",
  },
};
