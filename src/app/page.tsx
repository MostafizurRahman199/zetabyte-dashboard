import { AnimatedCard } from "@/components/AnimatedCard";



export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-600">Welcome to Zettabyte mini dashboard 🎉</p>

      {/* Example animated card */}
      <AnimatedCard />
    </div>
  );
}
