import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingShapes } from "./FloatingShapes";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { useRef, useState } from "react";

export const Hero = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    
    const rect = imageContainerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate tilt (max 20 degrees)
    const tiltX = (mouseY / (rect.height / 2)) * -20;
    const tiltY = (mouseX / (rect.width / 2)) * 20;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingShapes />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image with 3D Tilt */}
          <div 
            ref={imageContainerRef}
            className="relative group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{ perspective: '1000px' }}
          >
            <div 
              className="relative animate-float transition-transform duration-200 ease-out"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovering ? 'scale(1.05)' : 'scale(1)'}`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Outer glow ring */}
              <div 
                className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-all duration-700 animate-glow-pulse"
                style={{ transform: 'translateZ(-20px)' }}
              />
              
              {/* Spinning gradient border */}
              <div 
                className="absolute -inset-1 rounded-full bg-gradient-conic from-primary via-secondary to-accent animate-spin-slow opacity-80" 
                style={{ animationDuration: '8s', transform: 'translateZ(-10px)' }} 
              />
              
              {/* Image container */}
              <div 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden cyber-border transition-all duration-300"
                style={{ transform: 'translateZ(30px)' }}
              >
                <img 
                  src={profilePhoto} 
                  alt="Om Rawat" 
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent animate-scan-line opacity-30" />
                {/* Light reflection effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                  style={{
                    transform: `translate(${tilt.y * 2}px, ${tilt.x * 2}px)`,
                  }}
                />
              </div>
              
              {/* Multiple orbiting elements */}
              <div className="absolute -inset-8 animate-rotate-slow" style={{ transform: 'translateZ(50px)' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary rounded-full glow-box animate-pulse" />
              </div>
              <div className="absolute -inset-12 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '25s', transform: 'translateZ(40px)' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full glow-box" />
              </div>
              <div className="absolute -inset-6 animate-rotate-slow" style={{ animationDuration: '15s', transform: 'translateZ(60px)' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full glow-box" />
              </div>
              
              {/* Particle effects */}
              <div className="absolute -inset-16 pointer-events-none" style={{ transform: 'translateZ(70px)' }}>
                <div className="absolute top-1/4 left-0 w-1 h-1 bg-secondary rounded-full animate-twinkle" style={{ animationDelay: '0s' }} />
                <div className="absolute top-3/4 right-0 w-1 h-1 bg-primary rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-0 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-0 right-1/4 w-1 h-1 bg-secondary rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-secondary font-medium tracking-widest uppercase text-sm md:text-base animate-fade-in opacity-0" 
                 style={{ animationDelay: "0.2s" }}>
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black animate-fade-in opacity-0"
                  style={{ animationDelay: "0.4s" }}>
                <span className="text-gradient">Om Rawat</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-muted-foreground animate-fade-in opacity-0"
                  style={{ animationDelay: "0.6s" }}>
                Software Developer
              </h2>
            </div>

            <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed animate-fade-in opacity-0"
               style={{ animationDelay: "0.8s" }}>
              Crafting elegant digital experiences with cutting-edge technology. 
              Passionate about clean code, innovative solutions, and pushing the boundaries of what's possible.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in opacity-0"
                 style={{ animationDelay: "1s" }}>
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 font-display tracking-wider"
                onClick={() => scrollToSection("#projects")}
              >
                View My Work
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 font-display tracking-wider"
                onClick={() => scrollToSection("#contact")}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in opacity-0"
                 style={{ animationDelay: "1.2s" }}>
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover-glow"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};
