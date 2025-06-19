import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Which Yoga Pose Are You?
        </h1>
        <p className="text-muted-foreground text-lg">
          Take this fun and mindful quiz to discover the yoga pose that best
          reflects your personality and energy. 🌿
        </p>
        <p className="text-sm text-gray-500">
          In celebration of International Yoga Day on June 21st, let&apos;s
          explore your inner balance!
        </p>
        <Link href="/quiz">
          <Button size="lg">Start the Quiz</Button>
        </Link>
      </div>
    </main>
  );
}
