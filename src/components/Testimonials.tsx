import { Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Om is an exceptional developer who consistently delivers beyond expectations. His attention to detail and problem-solving skills are remarkable.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "CTO, Digital Wave",
    content: "Working with Om was a game-changer for our project. He brought innovative solutions and maintained excellent communication throughout.",
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, InnovateCo",
    content: "Om's technical expertise combined with his understanding of user needs makes him an invaluable team member. Highly recommended!",
    avatar: "ER",
  },
  {
    name: "David Kim",
    role: "Founder, AppVentures",
    content: "The quality of work Om delivers is outstanding. He's not just a coder but a true problem solver who cares about the end result.",
    avatar: "DK",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-bold text-lg">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full" />
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-12 h-12 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary glow-box"
                  : "glass hover:border-primary/50"
              }`}
            >
              <span className="font-display font-semibold text-sm">
                {testimonials[index].avatar}
              </span>
            </button>
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`glass rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                index === activeIndex ? "border-primary/50 glow-box" : "hover-glow"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center text-sm font-display font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h5 className="font-semibold text-sm">{testimonial.name}</h5>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-3">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
