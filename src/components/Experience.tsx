import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Software Developer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description: "Leading development of scalable web applications, mentoring junior developers, and implementing best practices across the team.",
    highlights: ["React", "Node.js", "AWS", "Team Lead"],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects, focusing on performance optimization and user experience improvements.",
    highlights: ["Vue.js", "Python", "PostgreSQL"],
  },
  {
    type: "education",
    title: "Bachelor's in Computer Science",
    company: "University of Technology",
    period: "2016 - 2020",
    description: "Graduated with honors, specializing in software engineering and artificial intelligence.",
    highlights: ["Algorithms", "AI/ML", "Software Engineering"],
  },
  {
    type: "work",
    title: "Junior Developer",
    company: "StartUp Labs",
    period: "2019 - 2020",
    description: "Started my professional journey building MVPs and learning agile development methodologies.",
    highlights: ["JavaScript", "React", "MongoDB"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-box z-10" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass rounded-2xl p-6 hover-glow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      {exp.type === "work" ? (
                        <Briefcase className="text-primary" size={20} />
                      ) : (
                        <GraduationCap className="text-primary" size={20} />
                      )}
                    </div>
                    <span className="text-sm text-secondary font-display">{exp.period}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg mb-1">{exp.title}</h3>
                  <p className="text-primary text-sm mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
