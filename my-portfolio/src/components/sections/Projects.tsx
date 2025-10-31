import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/lib/constants';

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif mb-5">Key projects</h2>
        
        <div className="space-y-12">
          {projects.map((project) => (
            <Card key={project.id} className="border-0 shadow-none bg-gray-50 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white text-xs text-gray-600 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-4/5 h-4/5 object-cover rounded-lg shadow-xl"
                  />
                </div>
                
                <h3 className="text-xl font-serif mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 text-xs hover:underline font-medium"
                  >
                    View Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 text-xs hover:underline font-medium"
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