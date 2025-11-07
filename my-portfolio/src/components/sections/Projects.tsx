import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/lib/constants';

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-16 dark:bg-[#000000] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif mb-5 text-[#000000] dark:text-[#FFFFFF]">Key projects</h2>
        
        <div className="space-y-12">
          {projects.map((project) => (
            <Card key={project.id} className="border-0 shadow-none bg-gray-50 dark:bg-[#2C2C2C] overflow-hidden transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white dark:bg-[#2C2C2C] text-xs text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="aspect-video bg-gray-200 dark:bg-[#212121] rounded-lg mb-6 flex items-center justify-center transition-colors duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-4/5 h-4/5 object-cover rounded-lg shadow-xl"
                  />
                </div>
                
                <h3 className="text-xl font-serif mb-3 text-gray-900 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 text-xs hover:underline font-medium transition-colors duration-200"
                  >
                    View Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 text-xs hover:underline font-medium transition-colors duration-200"
                  >
                    Live Demo
                  </a>
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