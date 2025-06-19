export interface Option {
  label: string;
  value: string;
}

export interface Question {
  question: string;
  options: Option[];
}

export interface Result {
  title: string;
  description: string;
}
