import { useEffect, useState } from "react";

export const FloatingShapes = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large rotating ring - slow parallax */}
      <div 
        className="absolute top-1/4 -right-32 w-96 h-96 border border-primary/20 rounded-full animate-rotate-slow"
        style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)` }}
      />
      
      {/* Second rotating ring - opposite direction */}
      <div 
        className="absolute top-1/3 -left-48 w-[500px] h-[500px] border border-secondary/10 rounded-full"
        style={{ transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.03}deg)` }}
      />
      
      {/* Floating cube - medium parallax */}
      <div 
        className="absolute top-1/3 left-10 w-20 h-20 border border-secondary/30 rotate-45 animate-float" 
        style={{ 
          animationDelay: "0s",
          transform: `translateY(${scrollY * 0.2}px) rotate(${45 + scrollY * 0.05}deg)`,
        }} 
      />
      
      {/* Additional floating cube */}
      <div 
        className="absolute bottom-1/3 right-20 w-16 h-16 border border-primary/20 animate-float" 
        style={{ 
          animationDelay: "1s",
          transform: `translateY(${scrollY * -0.25}px) rotate(${scrollY * 0.08}deg)`,
        }} 
      />
      
      {/* Glowing orb - fast parallax */}
      <div 
        className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl animate-pulse-glow"
        style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
      />
      
      {/* Second glowing orb */}
      <div 
        className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-gradient-to-br from-secondary/10 to-primary/10 blur-2xl"
        style={{ transform: `translateY(${scrollY * -0.2}px) translateX(${scrollY * 0.05}px)` }}
      />
      
      {/* Hexagon shape - unique parallax */}
      <div 
        className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent/20 animate-float"
        style={{ 
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          animationDelay: "2s",
          transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.1}deg)`,
        }} 
      />
      
      {/* Triangle shape */}
      <div 
        className="absolute bottom-1/2 right-1/3 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] border-l-transparent border-r-transparent border-b-accent/20"
        style={{ 
          transform: `translateY(${scrollY * -0.18}px) rotate(${scrollY * -0.06}deg)`,
        }} 
      />
      
      {/* Floating lines */}
      <div 
        className="absolute top-1/4 left-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        style={{ transform: `translateY(${scrollY * 0.12}px) rotate(${15 + scrollY * 0.02}deg)` }}
      />
      <div 
        className="absolute bottom-1/3 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
        style={{ transform: `translateY(${scrollY * -0.1}px) rotate(${-20 + scrollY * -0.03}deg)` }}
      />
      
      {/* Small dots with parallax */}
      {[...Array(20)].map((_, i) => {
        const speed = 0.05 + (i % 5) * 0.05;
        const direction = i % 2 === 0 ? 1 : -1;
        return (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full transition-transform duration-100"
            style={{
              top: `${(i * 5) % 100}%`,
              left: `${(i * 7) % 100}%`,
              transform: `translateY(${scrollY * speed * direction}px)`,
            }}
          />
        );
      })}
      
      {/* Larger floating particles */}
      {[...Array(8)].map((_, i) => {
        const speed = 0.08 + (i % 4) * 0.06;
        const direction = i % 2 === 0 ? 1 : -1;
        const size = 2 + (i % 3);
        return (
          <div
            key={`large-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 blur-sm"
            style={{
              width: `${size * 4}px`,
              height: `${size * 4}px`,
              top: `${(i * 12 + 10) % 90}%`,
              left: `${(i * 11 + 5) % 95}%`,
              transform: `translateY(${scrollY * speed * direction}px) translateX(${scrollY * speed * 0.3 * direction}px)`,
            }}
          />
        );
      })}

      {/* Grid lines with subtle parallax */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ transform: `translateY(${scrollY * 0.02}px)` }}
      >
        <div 
          className="h-full w-full" 
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }} 
        />
      </div>
      
      {/* Gradient overlay that shifts with scroll */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 opacity-50"
        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
      />
    </div>
  );
};
