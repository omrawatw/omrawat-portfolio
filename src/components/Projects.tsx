import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI-Powered Dashboard",
    description:
      "A comprehensive analytics dashboard with AI-driven insights, real-time data visualization, and predictive analytics features.",
    tech: ["React", "TypeScript", "Python", "TensorFlow"],
    image: null,
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: null,
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Real-Time Chat App",
    description:
      "Secure messaging application with end-to-end encryption, voice calls, and file sharing capabilities.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    image: null,
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Task Management Tool",
    description:
      "Collaborative project management tool with Kanban boards, team features, and automation.",
    tech: ["Vue.js", "Firebase", "Tailwind"],
    image: null,
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Weather Application",
    description:
      "Beautiful weather app with location-based forecasts, weather alerts, and interactive maps.",
    tech: ["React", "OpenWeather API", "Mapbox"],
    image: null,
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Portfolio Generator",
    description:
      "SaaS tool that helps developers create stunning portfolio websites with customizable templates.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    image: null,
    github: "#",
    live: "#",
    featured: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden hover-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Folder className="w-16 h-16 text-primary/50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-display font-bold text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                    <Github size={18} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                    <ExternalLink size={18} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-3 gap-4">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-xl p-5 hover-glow group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <Folder className="text-primary" size={24} />
                <div className="flex gap-3">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <h3 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
