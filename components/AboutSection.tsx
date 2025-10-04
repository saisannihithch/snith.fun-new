import React from "react";

export default function AboutSection() {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '4', label: 'Major Companies' },
    { value: '2', label: 'Research Papers' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 section-title fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700" data-testid="about-title">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="gradient-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary" data-testid="about-summary-title">
                <i className="fas fa-code mr-3"></i>
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="about-summary-1">
                Over 10+ years of experience as a Software and UI/UX Developer, specializing in building modern web applications using Angular, React.js, HTML5, and CSS. Proficient in both MEAN and MERN stacks, with hands-on experience in DevOps practices.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="about-summary-2">
                Strong background in the full Software Development Life Cycle (SDLC), including requirements analysis, design, development, integration, and deployment. Expertise with web-based GUI architecture and development using modern frameworks.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="about-summary-3">
                Additionally, experienced in blockchain applications using Hyperledger Fabric, cloud technologies (AWS, Azure), and accessibility standards (WCAG 2.2). Published researcher in IEEE International Conference on Blockchain and Cryptocurrency.
              </p>
            </div>
          </div>

          <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="gradient-border rounded-xl p-6 text-center" data-testid={`stat-${index}`}>
                  <div className="text-4xl font-bold text-primary mb-2 glow-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 gradient-border rounded-xl p-6">
              <h4 className="text-lg font-bold mb-4 text-accent-foreground flex items-center" data-testid="education-title">
                <i className="fas fa-graduation-cap mr-3 text-primary"></i>
                Education
              </h4>
              <div className="space-y-4">
                <div data-testid="education-masters">
                  <div className="font-semibold text-foreground">M.S. Information Technology</div>
                  <div className="text-sm text-muted-foreground">Kennesaw State University, GA (2019)</div>
                </div>
                <div data-testid="education-bachelors">
                  <div className="font-semibold text-foreground">B.Tech Computer Science</div>
                  <div className="text-sm text-muted-foreground">JNTUH, Hyderabad, India (2017)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
