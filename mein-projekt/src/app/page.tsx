import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">
          Willkommen bei deinem Projekt 🚀
        </h1>
        <Button>Los geht’s</Button>
      </div>
    </main>
  );
}
