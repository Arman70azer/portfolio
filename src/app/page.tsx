"use client";
import { useEffect } from "react";
import LineRandomCanva from "./lib/line_random_canva";
import { LogoArman } from "./lib/logo";
import AllProjects from "./lib/projects";
import ContactSection from "./lib/contact";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("visible"); // 🔄 Enlève la classe pour reset l'animation
            setTimeout(() => {
              entry.target.classList.add("visible"); // 🔥 Rajoute la classe après un court délai
            }, 200);
          }
        });
      },
      { threshold: 0.1 } // Déclenche l'effet quand 20% de la section est visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="container">
      {/* 🎨 Section Accueil */}
     
      <section className="section accueil">
        <div className="logo-container">
          <LogoArman />
        </div>
        <div className="text-container">
          <h1 className="titre">Welcome To My Portfolio</h1>
          <p className="sous-titre">Developer Fullstack passionate about the web and mobile applications.</p>
        </div>
      </section>

      <LineRandomCanva />

      {/* 🎨 Section Projets */}
      <AllProjects/>
      
      <LineRandomCanva />

      {/* 🎨 Section Contact */}
      <ContactSection/>

      
    </div>
  );
}
