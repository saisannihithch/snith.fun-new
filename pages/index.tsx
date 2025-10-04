import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('../components/ThreeScene'), { ssr: false });

const Home: NextPage = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background text-foreground">
      <Head>
        <title>Sai Sannihith Cheerla | Full Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio of Sai Sannihith Cheerla, a Full Stack Developer with over 10 years of experience in web development, blockchain, and cloud technologies." />
        <meta name="keywords" content="Full Stack Developer, Web Developer, Blockchain, Cloud Technologies, Angular, React, Portfolio" />
        <meta name="author" content="Sai Sannihith Cheerla" />
        <meta property="og:title" content="Sai Sannihith Cheerla | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Portfolio of Sai Sannihith Cheerla, a Full Stack Developer with over 10 years of experience in web development, blockchain, and cloud technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Sai Sannihith Cheerla | Full Stack Developer Portfolio" />
        <meta name="twitter:description" content="Portfolio of Sai Sannihith Cheerla, a Full Stack Developer with over 10 years of experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThreeScene />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
