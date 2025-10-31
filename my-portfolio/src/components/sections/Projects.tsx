import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/lib/constants';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[]; // Changed from tags
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif mb-12">Key projects</h2>
        
        <div className="space-y-16">
          {projects.map((project) => (
            <Card key={project.id} className="border-0 shadow-none bg-gray-50 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => ( // Changed from tags to technologies
                    <span 
                      key={index}
                      className="px-4 py-1.5 bg-white text-sm text-gray-600 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="aspect-video bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-4/5 h-4/5 object-cover rounded-lg shadow-2xl"
                  />
                </div>
                
                <h3 className="text-2xl font-serif mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Added project links */}
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm hover:underline"
                  >
                    View Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm hover:underline"
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