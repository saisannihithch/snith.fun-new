import React, { useState, useEffect, useRef } from "react";
import { Dialog, DialogClose, DialogContent } from "./ui/dialog";

// Skill badges data
const skills = [
  { name: "Angular", icon: "fab fa-angular", color: "text-destructive" },
  { name: "React", icon: "fab fa-react", color: "text-primary" },
  { name: "Node.js", icon: "fab fa-node-js", color: "text-accent-foreground" },
  { name: "AWS", icon: "fab fa-aws", color: "text-primary" },
];

export default function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDialogOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Static text inside Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px] p-0 rounded-lg shadow-lg overflow-hidden" hideCloseIcon>
            <div className="gradient-border rounded-lg">
              <div className="bg-card/90 backdrop-blur-lg border border-border p-6 flex flex-col items-center gap-4">
                <div className="mb-6 text-lg md:text-xl animate-fade-in text-card-foreground text-center">
                  <span>Thank you so much for taking the time and visiting my website. Anyone can create a simple portfolio website easily using AI these days but what keeps me apart is this website.</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  {/* Close Dialog */}
                  <DialogClose asChild>
                    <button className="px-6 py-2 rounded-lg bg-gray-500 text-white font-semibold hover:bg-gray-600 transition-all">
                      Close
                    </button>
                  </DialogClose>

                  {/* Open Samplier */}
                  <a
                    href="https://samplier.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-400 hover:to-purple-500 transition-all"
                  >
                    Open Samplier
                  </a>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Name */}
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slide-in relative">
          <span className="glow-text text-foreground inline-block">Sai Sannihith Cheerla</span>
          <style jsx>{`
            h1 span {
              display: inline-block;
              transform: perspective(500px) rotateX(10deg);
              transform-origin: center bottom;
            }
          `}</style>
        </h1>

        {/* Subtitle */}
        <div className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 animate-fade-in">
          <span className="font-mono text-primary">&lt;</span>
          Full Stack Developer
          <span className="font-mono text-primary">/&gt;</span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 animate-fade-in">
          Crafting innovative web solutions with 10+ years of expertise in
          Angular, React, and Cloud Technologies. Specializing in modern web
          applications, blockchain, and scalable architectures.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all glow-effect"
          >
            <i className="fas fa-envelope mr-2"></i>Get In Touch
          </a>
          <a
            href="#experience"
            className="px-8 py-4 bg-card text-card-foreground rounded-lg font-semibold border border-border hover:border-primary transition-all"
          >
            <i className="fas fa-briefcase mr-2"></i>View Experience
          </a>
        </div>

        {/* Skills */}
        <div className="mt-20 flex justify-center gap-8 flex-wrap animate-fade-in">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="px-6 py-3 rounded-full bg-card border border-border transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40"
            >
              <i className={`${skill.icon} text-2xl ${skill.color} mr-2`}></i>
              <span className="font-mono text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-3xl text-primary"></i>
      </div>
    </section>
  );
}
