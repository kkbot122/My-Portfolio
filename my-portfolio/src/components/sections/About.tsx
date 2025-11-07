const About = () => {
  return (
    <section className="min-h-screen px-6 py-20 dark:bg-[#000000] transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-serif mb-12 text-[#000000] dark:text-[#FFFFFF]">About me</h2>
        
        <div className="space-y-8">
          <h3 className="text-4xl font-serif leading-tight text-gray-900 dark:text-gray-100">
            I'm a curious builder who loves exploring how design and code shape human experiences.
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a third-year computer science student with hands-on experience in full stack development.
            I enjoy translating abstract ideas into functional web experiences and tools that make technology feel a little more alive.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I love tinkering with AI-driven interfaces and quirky digital experiments where logic wears a creative hat. Lately, data analytics has caught my curiosity I’d love to turn that fascination into something real.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Outside of code, I'm drawn to automobiles and tech products, anything that merges engineering with design. 
            They remind me that curiosity is the bridge between imagination and invention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;