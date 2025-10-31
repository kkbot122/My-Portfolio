const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
          I'm Kisna, a Junior Dev?
          <br />
          I answer user questions with thoughtful design + AI.
        </h1>
        
        <p className="text-gray-500 text-lg mb-2">
          Currently a student at <span className="text-blue-600 font-medium">Google</span> Bangalore.
        </p>
        
        <p className="text-gray-400">
          I previously solved for payment products at <span className="font-medium text-gray-600">Razorpay</span> + travel at <span className="font-medium text-gray-600">Scapia</span>.
          <br />
          I'm obsessed with human-AI partnership and purposeful tech, and I enjoy making user experience delightful.
        </p>
      </div>
    </section>
  );
};

export default Hero;