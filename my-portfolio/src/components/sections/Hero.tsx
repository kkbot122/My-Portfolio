const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-[#000000] transition-colors duration-300">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight text-gray-900 dark:text-[#FFE8DB]">
          I'm Kisna, 
          <br />
          I answer user questions with thoughtful design + AI.
        </h1>
        
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">
          Currently a student at <span className="text-blue-700 dark:text-[#F96E2A] font-medium">Symbiosis Institute of Technology</span> Pune.
        </p>
        
        {/* <p className="text-gray-400 dark:text-gray-500">
          I previously solved for payment products at <span className="font-medium text-gray-600 dark:text-gray-400">Razorpay</span> + travel at <span className="font-medium text-gray-600 dark:text-gray-400">Scapia</span>.
          <br />
          I'm obsessed with human-AI partnership and purposeful tech, and I enjoy making user experience delightful.
        </p> */}
      </div>
    </section>
  );
};

export default Hero;