import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
      <div className="flex items-center">
        <div className="w-1/2 p-10 flex items-center">
        {/* Left column (Text) */}
          <div className="md:col-span-3 space-y-6 text-left">
            <h1 className="text-gray-900 text-3xl md:text-5xl font-semibold">
              Hi, I'm <span className="text-blue-600">Gwyneth</span>!
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              I blend analytical thinking with creativity.
              From data analysis to content creation, I'm passionate about making complex ideas accessible. 
              Currently at Gojek, constantly learning, and always up for a board game session!
              {/*Currently at Gojek, constantly learning, and enjoying RPGs and board games. */}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("portfolio")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-10 flex items-center">
          {/* Right column (Image) */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="w-[500px] md:w-[600px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/Gwyneth.jpg"
              alt="Chrysanty Gwyneth Winata Ang"
              width="500"
              height="8000"
            />
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* Scroll down arrow */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
