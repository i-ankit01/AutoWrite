import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, TrendingUp, Heart, Clock } from "lucide-react";

export default function LandingPage() {
  const stats = [
    {
      id: 1,
      label: "AI-Powered Analytics",
      value: "Smart Insights",
      icon: Brain,
      gradient: "from-light-primary/20 to-light-secondary/20",
    },
    {
      id: 2,
      label: "Real-time Engagement",
      value: "Live Tracking",
      icon: TrendingUp,
      gradient: "from-light-secondary/20 to-light-tertiary/20",
    },
    {
      id: 3,
      label: "Sentiment Analysis",
      value: "Analyze Better",
      icon: Heart,
      gradient: "from-light-tertiary/20 to-light-primary/20",
    },
    {
      id: 4,
      label: "Optimal Post Timing",
      value: "Maximize Reach",
      icon: Clock,
      gradient: "from-light-primary/20 to-light-tertiary/20",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen w-full flex flex-col items-center pt-20 pb-20 md:pt-32 md:pb-40 overflow-hidden">
        {/* Gradient background */}
        <div className="fixed inset-0 bg-gradient-to-br from-light-tertiary/90 via-light-background to-light-tertiary/40 z-[-1]" />

        <div>
          <Button
            className="bg-primary/20 hover:bg-primary/30 border-primary cursor-pointer hover:scale-105 font-semibold"
            variant={"outline"}
          >
            Generate - Post - Grow
          </Button>
        </div>

        <div>
          <h1 className="text-6xl text-center font-bold text-primary mt-10 ">
            Enhance Your Social Growth <br /> With{" "}
            <span className="highlight hover:scale-105 transition duration-200 cursor-pointer">
              AutoWrite
            </span>{" "}
            AI
          </h1>
        </div>
        <h2 className="mt-15 text-lg text-primary font-semibold text-center">
          Generate high quality content using AI in seconds.
        </h2>
        <div className="mt-15">
          <Button className="w-38 cursor-pointer flex items-center gap-2 py-5">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="mt-10 flex gap-7 items-center">
          {stats.map((box, index) => (
            <div
              className={` w-64 p-4 md:p-6 rounded-2xl border backdrop-blur-sm bg-gradient-to-br border-light-primary/10 hover:border-light-primary/20 transition-all duration-300 hover:shadow-lg ${box.gradient} cursor-pointer`}
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center bg-light-primary/20">
                  <box.icon />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1 text-light-tertiary mt-3">
                  {box.value}
                </h3>
                <p className="text-xs md:text-sm text-center text-light-primary">
                  {box.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
