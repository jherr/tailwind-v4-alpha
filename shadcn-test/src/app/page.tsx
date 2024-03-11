import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 max-w-xl mt-5 mx-auto">
      <Button>primary button</Button>
      <Button variant="destructive">destructive button</Button>
      <Button variant="ghost">ghost button</Button>
      <Button variant="link">link button</Button>
      <Button variant="outline">outline button</Button>
      <Button variant="secondary">secondary button</Button>
    </main>
  );
}
