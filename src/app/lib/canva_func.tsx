interface Segment {
  startX: number;
  startY: number;
  length: number;
  angle: number;
  progress: number;
  currentX: number;
  currentY: number;
  color: string;
}

const createSegment = (width: number, height: number): Segment => {
  const startX = Math.random() * width; // Position X de départ aléatoire
  const startY = Math.random() * height; // Position Y de départ aléatoire
  const length = Math.random() * 50 + 20; // Longueur du segment
  const angle = Math.random() * Math.PI * 2; // Direction du segment aléatoire (en radians)
  const progress = 0; // Le progrès du segment (0 à 1)

  const colors = [
    'rgba(255, 99, 71, 0.9)',  
    'rgba(0, 255, 255, 0.8)',  
    'rgba(255, 165, 0, 0.9)',  
    'rgba(34, 193, 195, 0.8)',
    'rgba(255, 105, 180, 0.9)' 
  ];
  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return {
    startX,
    startY,
    length,
    angle,
    progress,
    currentX: startX,
    currentY: startY,
    color: randomColor, // Appliquer la couleur choisie aléatoirement
  };
};

  

  const drawSegments = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, segments: Segment[], maxSegments: number) => {
   
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
  
    segments.forEach((segment, index) => {
      const { startX, startY, length, angle } = segment;
  
      const moveX = Math.cos(angle) * length * 0.08; 
      const moveY = Math.sin(angle) * length * 0.08; 
  
      
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(segment.currentX + moveX, segment.currentY + moveY);
      ctx.strokeStyle = segment.color;
      ctx.lineWidth = 2.5;
      ctx.stroke();
  
      // Mettre à jour la position du segment
      segment.currentX += moveX;
      segment.currentY += moveY;
  
      // Mettre à jour le progrès du segment
      segment.progress += 0.005;
  
      // Si le segment est terminé, le retirer du tableau et en ajouter un nouveau
      if (segment.progress >= 1) {
        segments.splice(index, 1);  // Supprimer le segment actuel du tableau
        if (segments.length < maxSegments) {
          segments.push(createSegment(canvas.width, canvas.height)); // Ajouter un nouveau segment
        }
      }
    });
  
    // Continuer l'animation
    if (segments.length < maxSegments) {
      requestAnimationFrame(() => drawSegments(canvas, ctx, segments, maxSegments));
    }
  };
  

//   const drawText = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, text: string, speed: number) => {
//     let opacity = 0.0; 
    
//     const fadeText = () => {
//         ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas avant chaque frame

//         // Définition du style du texte
//         ctx.font = "60px Arial";
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";

//         const textX = canvas.width / 2;
//         const textY = canvas.height / 2;
//         const padding = 20;
//         const textWidth = ctx.measureText(text).width;
//         const textHeight = 80; // Approximation basée sur la taille de la police

//         // Fond rectangulaire avec la couleur rgb(29, 28, 28) et effet de fade-in
//         ctx.globalAlpha = opacity; // Applique l'opacité au fond et au texte
//         ctx.fillStyle = "rgb(34, 32, 32)";
//         ctx.fillRect(textX - textWidth / 2 - padding, textY - textHeight / 2 - padding, 
//                      textWidth + 2 * padding, textHeight + 2 * padding);

//         // Dessiner le contour noir du texte
//         ctx.strokeStyle = "black";
//         ctx.lineWidth = 3;
//         ctx.strokeText(text, textX, textY);

//         // Dessiner le texte avec effet de fade-in
//         ctx.fillStyle = "rgba(250, 250, 250, 1)"; 
//         ctx.fillText(text, textX, textY);

//         ctx.globalAlpha = 1;

//         // Augmenter l'opacité progressivement
//         opacity += speed;
//         if (opacity < 1) {
//             requestAnimationFrame(fadeText);
//         }
//     };

//     fadeText();
// };

  

export {
    drawSegments,
    createSegment,
  // drawText,
}

