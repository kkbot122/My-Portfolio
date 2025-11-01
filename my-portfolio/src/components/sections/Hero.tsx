import { Typewriter } from "@/components/ui/typewriter-text";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#F3EEEA] dark:bg-[#000000] transition-colors duration-300">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight text-gray-900 dark:text-[#FFE8DB]">
          I'm Kisna Kanti, 
          <br />
          <Typewriter
            text={[
              "Web Developer", 
              "Tech Innovator",
              "AI Enthusiast",
              "Chief Prompt Officer",
              
            ]}
            speed={100}
            loop={true}
            className="text-5xl md:text-6xl font-serif text-gray-900 dark:text-[#FFE8DB]"
          />
        </h1>
        
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">
          Currently a <span className="text-[#ED3500] font-medium">CS major</span> at <span className="text-[#093FB4] dark:text-[#F96E2A] font-medium">Symbiosis Institute of Technology</span> Pune.
        </p>
        
        <p className="text-gray-400 dark:text-gray-500">
          Avid learner and tech enthusiast passionate about AI, web development, and UX design.
          <br />
          I'm obsessed with human-AI partnership and purposeful tech, and I enjoy making user experience delightful.
        </p>
      </div>
    </section>
  );
};

export default Hero;