import { Card } from "@/components/ui/card";

interface Skill {
  name: string;
  logo: string;
  darkLogo?: string;
}

const Skills = () => {
  const skills: Skill[] = [
    // 1. Core Web Stack
    {
      name: "Next.js",
      logo: "https://cdn.simpleicons.org/next.js/000000",
      darkLogo: "https://cdn.simpleicons.org/next.js/FFFFFF",
    },
    { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    {
      name: "TypeScript",
      logo: "https://cdn.simpleicons.org/typescript/3178C6",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },

    // 2. Backend & Runtime
    { name: "Node.js", logo: "https://cdn.simpleicons.org/node.js/5FA04E" },
    {
      name: "Express.js",
      logo: "https://cdn.simpleicons.org/express/000000",
      darkLogo: "https://cdn.simpleicons.org/express/FFFFFF",
    },

    // 3. Database & ORM
    {
      name: "PostgreSQL",
      logo: "https://cdn.simpleicons.org/postgresql/4169E1",
    },
    { name: "Prisma", logo: "https://cdn.simpleicons.org/prisma/2D3748" },
    { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3FCF8E" },

    // 4. DevOps & Cloud
    { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
    {
      name: "Vercel",
      logo: "https://cdn.simpleicons.org/vercel/000000",
      darkLogo: "https://cdn.simpleicons.org/vercel/FFFFFF",
    },
    {
      name: "Cloudflare",
      logo: "https://cdn.simpleicons.org/cloudflare/F38020",
    }, // Shortened name for better fit

    // 5. Data Science & Languages
    { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
    {
      name: "Pandas",
      logo: "https://cdn.simpleicons.org/pandas/150458",
      darkLogo: "https://cdn.simpleicons.org/pandas/FFFFFF",
    },
    {
      name: "Scikit-Learn",
      logo: "https://cdn.simpleicons.org/scikitlearn/F7931E",
    },
    { name: "C++", logo: "https://cdn.simpleicons.org/c++/00599C" },

    // 6. Utilities & Design
    { name: "Bash", logo: "https://cdn.simpleicons.org/gnubash/4EAA25" },
    { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
  ];

  return (
    <section className="min-h-screen px-4 sm:px-6 py-12 sm:py-20 dark:bg-[#000000] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-serif mb-8 sm:mb-16 text-left text-[#000000] dark:text-gray-100">
          Skills & Technologies
        </h2>

        {/* Grid: 3 columns on mobile, 4 on tablet, 5 on desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-0">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-none hover:shadow-lg dark:hover:shadow-gray-950 hover:z-10 transition-all duration-300 group cursor-pointer aspect-square bg-white dark:bg-[#212121]"
            >
              <div className="h-full p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4">
                {/* Icon - Responsive sizing */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
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
                {/* Text - Smaller on mobile */}
                <h3 className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 text-center font-medium leading-tight">
                  {skill.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-16 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm px-4">
            And many more tools & technologies in my toolkit
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
