import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-auto flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="text-5xl font-bold font-barlow text-purple-700">
        Barlow Font
      </h1>
      <h1 className="text-5xl font-bold text-purple-700">Barlow Font</h1>
      <p className="mt-4 text-lg font-inter text-gray-500">
        Dies ist ein Text mit Inter Font.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        Dies ist ein Text mit Inter Font.
      </p>
      <Button variant={"destructive"}>Click here</Button>
    </div>
  );
}
