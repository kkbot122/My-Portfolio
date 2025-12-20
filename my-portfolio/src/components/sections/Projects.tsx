import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/constants";

const Projects = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 py-12 sm:py-16 dark:bg-[#000000] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-serif mb-12 sm:mb-20 text-[#000000] dark:text-[#FFFFFF]">
          Key projects
        </h2>

        <div className="space-y-20 sm:space-y-32">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="border-0 shadow-none bg-transparent"
            >
              <CardContent className="p-0">
                <div
                  className={`flex flex-col gap-8 lg:gap-16 items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image Section - Takes up half width on desktop */}
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-video bg-gray-100 dark:bg-[#212121] rounded-2xl overflow-hidden shadow-sm transition-colors duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Text Section - Takes up half width on desktop */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    {/* Technologies (Moved to top of text like reference) */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white dark:bg-[#2C2C2C] text-xs text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 transition-colors duration-300 whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-4xl font-serif mb-4 text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Links - Stylized to match reference "View" button */}
                    <div className="flex gap-4 flex-wrap">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF3F33] dark:text-blue-400 text-xs sm:text-sm hover:underline font-bold transition-colors duration-200"
                      >
                        View Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF3F33] dark:text-blue-400 text-xs sm:text-sm hover:underline font-bold transition-colors duration-200"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
