import { create } from "zustand";

interface QuizState {
  answers: string[];
  setAnswer: (index: number, value: string) => void;
  reset: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  answers: [],
  setAnswer: (index, value) =>
    set((state) => {
      const updated = [...state.answers];
      updated[index] = value;
      return { answers: updated };
    }),
  reset: () => set({ answers: [] }),
}));
