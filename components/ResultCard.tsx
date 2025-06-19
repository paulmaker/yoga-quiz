interface Props {
  title: string;
  description: string;
}

export default function ResultCard({ title, description }: Props) {
  return (
    <div className="bg-green-100 p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
