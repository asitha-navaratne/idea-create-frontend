import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="min-h-0 flex flex-1 flex-col items-center justify-center">
      <h1 className="text-primary text-[clamp(2rem,10vw,5rem)] font-bold text-center mb-1">
        Collaborate and Create!
      </h1>
      <h2 className="text-center text-[clamp(1rem,1.4vw,2rem)] font-medium">
        Work on your ideas together, seamlessly and in real time.
      </h2>
      <Button>Sign in to continue</Button>
    </div>
  );
}
