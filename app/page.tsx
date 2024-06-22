import Hero from "@/components/home";

export default function Home() {
  return (
    <div className="relative">
      <div
        className="relative bg-cover bg-center min-h-[88vh]"
        style={{
          backgroundImage: "url('/blue-background.png')",
        }}
      >
        <Hero />
      </div>
    </div>
  );
}
