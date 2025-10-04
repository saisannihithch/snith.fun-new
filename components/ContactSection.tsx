import React from "react";

export default function ContactSection() {
  const services = [
    {
      title: "Full Stack Development",
      description: "MEAN/MERN stack applications with modern frameworks",
    },
    {
      title: "Cloud Architecture",
      description: "AWS, Azure deployment and optimization",
    },
    {
      title: "Blockchain Solutions",
      description: "Hyperledger Fabric applications",
    },
    {
      title: "Mobile Development",
      description: "Ionic, React Native for iOS and Android",
    },
    {
      title: "UI/UX Design",
      description: "Accessible, WCAG-compliant interfaces",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 section-title fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700"
          data-testid="contact-title"
        >
          Let's Connect
        </h2>

        <div className="flex justify-center">
          <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700 w-full max-w-2xl">
            <div className="gradient-border rounded-2xl p-8 h-full flex flex-col justify-center pointer-events-none">
              <h3
                className="text-2xl font-bold mb-6 text-foreground"
                data-testid="services-title"
              >
                What I Can Help With
              </h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start pointer-events-auto"
                    data-testid={`service-${index}`}
                  >
                    <i className="fas fa-check-circle text-primary text-xl mr-4 mt-1"></i>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {service.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {service.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex justify-center gap-6">
                  <a
                    href="https://linkedin.com/in/sannihithch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors group cursor-pointer pointer-events-auto"
                    data-testid="social-linkedin"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin text-primary group-hover:text-primary-foreground text-xl transition-colors"></i>
                  </a>
                  <a
                    href="https://github.com/saisannihithch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors group cursor-pointer pointer-events-auto"
                    data-testid="social-github"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github text-primary group-hover:text-primary-foreground text-xl transition-colors"></i>
                  </a>
                  <a
                    href="mailto:saisannihithcheerla@gmail.com"
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors group cursor-pointer pointer-events-auto"
                    data-testid="social-email"
                    aria-label="Email"
                  >
                    <i className="fas fa-envelope text-primary group-hover:text-primary-foreground text-xl transition-colors"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
