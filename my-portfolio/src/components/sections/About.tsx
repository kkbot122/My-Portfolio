import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-serif mb-12 text-gray-600">About me</h2>
        
        <div className="space-y-8">
          <h3 className="text-4xl font-serif leading-tight">
            I'm a designer, creator and traveller - who loves to draw inspiration from the world around me.
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            I spent the last 5 years crafting solutions for several aspects of fintech in Indian start up space before moving onto Google. It has helped me develop a deep understanding of how users perceive money as well as given me a knack for simplifying complex workflows into simple, easy to use, habit forming products.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            I love to observe how people interact with tech in their daily lives. I feel well designed products are like toothbrushes, an invisible companion to your life that you cannot do without.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            I am passionate about design as a medium to solve problems elegantly and joyfully, and my 4 years human-AI partnership [in workflows, in life, as an interest] is my strongest obsession; much like Arthur Weasley's with Muggles [What exactly is the function of a rubber duck?] 🦆
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            I segued into design from fashion management, social impact and English literature. Naturally, I am drawn towards reading and researching. I love travelling, nature, pop-cat meme and baking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;