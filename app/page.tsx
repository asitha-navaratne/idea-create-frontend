import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-lg">
      <h1 className="text-primary text-[clamp(2rem,5vw,6rem)] font-bold text-center mb-8 sm:mb-5 leading-tight">
        Collaborate and Create!
      </h1>
      <h2 className="text-center text-[clamp(1rem,1vw,2rem)] font-medium mb-15 text-text-color">
        Work on your ideas together, seamlessly and in real time.
      </h2>
      <Button>Sign in to continue</Button>
    </div>
  );
}
