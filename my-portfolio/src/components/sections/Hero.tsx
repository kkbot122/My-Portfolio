import { Typewriter } from "@/components/ui/typewriter-text";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 dark:bg-[#000000] transition-colors duration-300 overflow-hidden relative">
    
      <div className="max-w-2xl relative z-10 text-[#000000] dark:text-[#FFFFFF]">
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block">
            I'm Kisna Kanti,
          </span>
          <br />
          <span className="relative inline-block group">
            <Typewriter
              text={[
                "Web Developer",
                "Tech Innovator",
                "AI Enthusiast",
                "Chief Prompt Officer",
              ]}
              speed={100}
              loop={true}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif"
            />
          </span>
        </h1>

        <div
          className={`space-y-4 transform transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-base sm:text-lg mb-2 leading-relaxed">
            Currently a{" "}
            <span className="text-[#ED3500] font-medium relative inline-block group/cs">
              CS major
            </span>{" "}
            at{" "}
            Symbiosis Institute of Technology Pune.
          </p>

          <p className="text-sm sm:text-base leading-relaxed opacity-90">
            Avid learner and tech enthusiast passionate about AI, web
            development, and UX design.
            <br />
            I'm obsessed with human-AI partnership and purposeful tech, and I
            enjoy making user experience delightful.
          </p>
        </div>       
      </div>
    </section>
  );
};

export default Hero;