import React from "react";
export default function SkillsSection() {
  const skillCategories = [
    {
      icon: 'fa-server',
      title: 'DevOps Tools',
      skills: ['Docker', 'Jenkins', 'Maven', 'Git', 'Argo CD']
    },
    {
      icon: 'fa-cloud',
      title: 'Cloud Platforms',
      skills: ['AWS', 'Azure', 'Firebase', 'OpenShift']
    },
    {
      icon: 'fa-palette',
      title: 'Frontend',
      skills: ['Angular 12+', 'React.js', 'Next.js', 'Vite', 'Ionic']
    },
    {
      icon: 'fa-database',
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Java', 'Spring Boot', '.NET']
    },
    {
      icon: 'fa-table',
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'DynamoDB', 'Elasticsearch']
    },
    {
      icon: 'fa-cube',
      title: 'Specialized',
      skills: ['Blockchain', 'Hyperledger', 'Three.js', 'GraphQL', 'WCAG 2.2']
    }
  ];

  const additionalSkills = [
    {
      icon: 'fa-sync',
      title: 'State Management',
      skills: ['NgRx', 'Redux', 'RxJS']
    },
    {
      icon: 'fa-vial',
      title: 'Testing & QA',
      skills: ['Jest', 'Cypress', 'Jasmine', 'Cucumber']
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 section-title fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700" data-testid="skills-title">
          Technical Arsenal
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="gradient-border rounded-2xl p-8 fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              data-testid={`skill-category-${index}`}
            >
              <div className="flex items-center mb-6">
                <i className={`fas ${category.icon} text-3xl text-primary mr-4`}></i>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-4 py-2 bg-muted rounded-lg text-sm font-mono transition-all hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40"
                    data-testid={`skill-${index}-${skillIndex}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {additionalSkills.map((category, index) => (
            <div 
              key={index} 
              className="gradient-border rounded-2xl p-8 fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              data-testid={`additional-skill-${index}`}
            >
              <div className="flex items-center mb-6">
                <i className={`fas ${category.icon} text-3xl text-primary mr-4`}></i>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-4 py-2 bg-muted rounded-lg text-sm font-mono transition-all hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40"
                    data-testid={`additional-skill-${index}-${skillIndex}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
