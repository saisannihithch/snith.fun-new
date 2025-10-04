import React from "react";
export default function Footer() {
  return (
    <footer className="py-4 border-t relative border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground" data-testid="footer-copyright">
            <span className="font-mono">&copy; 2025 Sai Sannihith Cheerla.</span> Built with 
            <i className="fas fa-heart text-destructive mx-1"></i> using React, Three.js & Next.js
          </p>
          <p className="text-sm text-muted-foreground mt-2" data-testid="footer-tagline">
            Full Stack Developer | Cloud Architect | Blockchain Enthusiast
          </p>
        </div>
      </div>
    </footer>
  );
}
