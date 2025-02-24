"use client";
import { useEffect, useRef } from "react";
import { createSegment, drawSegments } from "./canva_func";

export default function LineRandomCanva() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const resizeCanvas = () => {
      if (containerRef.current && canvasRef.current && textCanvasRef.current) {
        const container = containerRef.current;
        const canvas = canvasRef.current;
       // const textCanvas = textCanvasRef.current;
        const ctx = canvas.getContext("2d");
       // const ctxText = textCanvas.getContext("2d");

        if (ctx) {
          // Met à jour la taille du canvas en fonction du conteneur
          canvas.width = container.clientWidth;
          canvas.height = container.clientHeight;
        //   textCanvas.width = canvas.width;
        //   textCanvas.height = canvas.height;

          const segments = [];
          const maxSegments = Math.floor((canvas.width * canvas.height) / 30);

          for (let i = 0; i < 100; i++) {
            segments.push(createSegment(canvas.width, canvas.height));
          }

          // Lancer les animations
          drawSegments(canvas, ctx, segments, maxSegments);
        //   drawText(textCanvas, ctxText, "$$$$$$$$$$$$$$$$$$$$", 0.01);
        }
      }
    };

    // Observer les changements de taille du conteneur
    const observer = new ResizeObserver(resizeCanvas);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Nettoyage à la suppression du composant
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%", 
        height: "100%",
        background: "#232323",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Canvas pour le fond */}
      <canvas ref={canvasRef} id="backgroundCanvas" style={{ position: "relative", flexGrow: 1 }} />

      {/* Canvas pour le texte */}
      <canvas
        ref={textCanvasRef}
        id="textCanvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
        }}
      />
    </div>
  );
}
