import React from "react";
export default function ExperienceSection() {
  const experiences = [
    {
      company: '3M (Minnesota)',
      role: 'Sr. Software Engineer',
      period: 'Jan 2021 - May 2025',
      icon: 'fa-building',
      achievements: [
        'Rewrote legacy AngularJS to Angular 12+ with Material Angular & Ionic',
        'Developed internal CMS with React, Tailwind CSS, Vite, MongoDB/PostgreSQL',
        'Implemented CI/CD with Docker, RedHat OpenShift, and Argo CD',
        'AWS Lambda integration with Salesforce APIs using OAuth 2.0'
      ],
      technologies: ['Angular', 'Ionic', 'React', 'AWS', 'Docker']
    },
    {
      company: 'DataKwip Holdings LLC',
      role: 'UI/UX Developer',
      period: 'Jan 2020 - Dec 2020',
      icon: 'fa-code',
      achievements: [
        'Built applications with React.js, Next.js, and GraphQL',
        'AWS Lambda functions for S3 & DynamoDB CRUD operations',
        'Optimized Lambda cold start, reducing costs by 30%',
        'WCAG 2.1 compliance and comprehensive testing with Jest & Cypress'
      ],
      technologies: ['React', 'Next.js', 'GraphQL', 'AWS Lambda', 'Redux']
    },
    {
      company: 'Kennesaw State University',
      role: 'UI Developer with Blockchain',
      period: 'May 2018 - Dec 2019',
      icon: 'fa-graduation-cap',
      achievements: [
        'Developed Blockchain apps with Hyperledger Fabric & Docker',
        'Built full MEAN & MERN stack applications',
        'Published 2 IEEE research papers on Blockchain',
        'Golang expertise with Hyperledger Fabric SDK'
      ],
      technologies: ['Blockchain', 'Hyperledger', 'Golang', 'Docker', 'Node.js']
    },
    {
      company: 'Pranava Technologies',
      role: 'Web Application Developer',
      period: 'Jan 2015 - Dec 2017',
      icon: 'fa-laptop-code',
      achievements: [
        'Dynamic websites with Angular.js, WordPress, PHP',
        'eCommerce and architectural websites for global clients',
        'Android apps for Government of Telangana',
        'Adobe tools for UX design (Illustrator, XD)'
      ],
      technologies: ['Angular.js', 'WordPress', 'PHP', 'Adobe XD', 'MEAN Stack']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 section-title fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700" data-testid="experience-title">
          Professional Journey
        </h2>

        <div className="relative space-y-12">
          {/* Timeline connector */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700`}
              data-testid={`experience-${index}`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="md:text-right order-2 md:order-1">
                      <div className="inline-block md:block">
                        <div className="gradient-border rounded-2xl p-8 text-left">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-primary mb-2">{exp.company}</h3>
                              <p className="text-lg text-foreground font-semibold">{exp.role}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-muted-foreground font-mono">{exp.period}</div>
                            </div>
                          </div>
                          
                          <div className="mb-6">
                            <h4 className="text-sm font-bold text-accent-foreground mb-3 flex items-center">
                              <i className="fas fa-check-circle text-primary mr-2"></i>
                              Key Achievements
                            </h4>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start">
                                  <i className="fas fa-angle-right text-primary mr-2 mt-1"></i>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center order-1 md:order-2">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center glow-effect">
                        <i className={`fas ${exp.icon} text-2xl text-primary-foreground`}></i>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center order-1">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center glow-effect">
                        <i className={`fas ${exp.icon} text-2xl text-primary-foreground`}></i>
                      </div>
                    </div>
                    
                    <div className="order-2">
                      <div className="gradient-border rounded-2xl p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-primary mb-2">{exp.company}</h3>
                            <p className="text-lg text-foreground font-semibold">{exp.role}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground font-mono">{exp.period}</div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-sm font-bold text-accent-foreground mb-3 flex items-center">
                            <i className="fas fa-check-circle text-primary mr-2"></i>
                            Key Achievements
                          </h4>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start">
                                <i className="fas fa-angle-right text-primary mr-2 mt-1"></i>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
