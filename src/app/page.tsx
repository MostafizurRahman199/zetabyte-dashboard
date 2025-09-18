import { AnimatedCard } from "../components/AnimatedCard";



export default function HomePage() {
  return (
    <div className="w-full  md:w-10/12 mx-auto p-6 min-h-screen">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-600">Welcome to Zettabyte mini dashboard 🎉</p>

      {/* Example animated card */}
      <AnimatedCard />
    </div>
  );
}
