import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="font-display text-xl font-bold text-gradient">
            OM.
          </a>
          
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive" /> by Om Rawat
          </p>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
