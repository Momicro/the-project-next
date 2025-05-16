import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <div>
        <div className="w-auto flex gap-x-5 justify-end">
          <UserButton />
          <ThemeToggle />
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-900">
        <h1 className="text-5xl font-bold font-barlow text-purple-700">
          Barlow Font
        </h1>
        <h1 className="text-5xl font-bold text-purple-700">Barlow Font</h1>
        <p className=" text-lg font-inter text-gray-500">
          Dies ist ein Text mit Inter Font.
        </p>
        <p className="text-lg text-gray-500">
          Dies ist ein Text mit Inter Font.
        </p>
        <Button variant={"destructive"}>Click here</Button>
      </div>
    </main>
  );
}
