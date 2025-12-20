import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-bold text-2xl mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "NINJAFF5999@GMAIL.com" },
                { icon: Phone, label: "Phone", value: "+91 63970 31644" },
                { icon: MapPin, label: "Location", value: "India" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 glass rounded-xl p-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-display font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/omrawatw", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/omrawat2804", label: "LinkedIn" },
                  { icon: Twitter, href: "https://instagram.com/itzomrawat", label: "Instagram" },
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

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-background/50 border-border/50 focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 font-display tracking-wider"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
