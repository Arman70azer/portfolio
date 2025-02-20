"use client";
import { useEffect } from "react";
import LineRandomCanva from "./lib/line_random_canva";
import { LogoArman } from "./lib/logo";

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
            }, 300);
          }
        });
      },
      { threshold: 0.3 } // Déclenche l'effet quand 30% de la section est visible
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
          <p className="sous-titre">Developer passionate about the web and mobile applications.</p>
        </div>
      </section>

      <LineRandomCanva />

      {/* 🎨 Section Projets */}
      <section className="section projets">
        <h2 className="titre">My Projects</h2>
        <p className="sous-titre">
          Découvrez mes travaux en React, Next.js et plus encore. Je crée des applications modernes et réactives pour améliorer l'expérience utilisateur.
        </p>
      </section>

      <LineRandomCanva />

      {/* 🎨 Section Contact */}
      <section className="section contact">
        <h2 className="titre">Contact-me</h2>
        <p className="sous-titre">Email : exemple@email.com</p>
      </section>

      
    </div>
  );
}
