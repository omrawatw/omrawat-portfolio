import { Code2, Rocket, Zap, Heart } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code is my passion.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Always exploring new technologies and pushing creative boundaries.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and delivering lightning-fast experiences.",
  },
  {
    icon: Heart,
    title: "User-Centric",
    description: "Building solutions that truly resonate with end users.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">Software Developer</span> with a love for creating 
              innovative digital solutions. With a strong foundation in modern web technologies, 
              I specialize in building responsive, user-friendly applications that make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with curiosity and has evolved into a career driven by 
              continuous learning and improvement. I believe in writing code that not only works 
              but tells a story and solves real problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "50+", label: "Projects Done" },
                { value: "20+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center glass rounded-xl p-4">
                  <div className="text-3xl md:text-4xl font-display font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass rounded-2xl p-6 hover-glow group cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
