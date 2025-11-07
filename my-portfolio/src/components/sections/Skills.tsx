import { Card } from '@/components/ui/card';

interface Skill {
  name: string;
  logo: string;
  darkLogo?: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Express.js", logo: "https://cdn.simpleicons.org/express/000000", darkLogo: "https://cdn.simpleicons.org/express/FFFFFF" },
    { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Node.js", logo: "https://cdn.simpleicons.org/node.js/5FA04E" },
    { name: "Vite", logo: "https://cdn.simpleicons.org/vite/646CFF" },
    { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3FCF8E" },
    { name: "C++", logo: "https://cdn.simpleicons.org/c++/00599C" },
    { name: "Bash", logo: "https://cdn.simpleicons.org/gnubash/4EAA25" },
    { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Scikit-Learn", logo: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
    { name: "Pandas", logo: "https://cdn.simpleicons.org/pandas/150458", darkLogo: "https://cdn.simpleicons.org/pandas/FFFFFF" },
  ];

  return (
    <section className="min-h-screen px-6 py-20 dark:bg-[#000000] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif mb-16 text-left text-[#000000] dark:text-gray-100">Skills & Technologies</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-none hover:shadow-lg dark:hover:shadow-gray-950 hover:z-10 transition-all duration-300 group cursor-pointer aspect-square bg-white dark:bg-[#212121]"
            >
              <div className="h-full p-8 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain dark:hidden"
                  />
                  <img 
                    src={skill.darkLogo || skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain hidden dark:block"
                  />
                </div>
                <h3 className="text-sm text-gray-700 dark:text-gray-300 text-center font-medium">
                  {skill.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            And many more tools & technologies in my toolkit
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;