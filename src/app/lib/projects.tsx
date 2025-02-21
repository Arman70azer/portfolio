import MediaCard from "./card";
import { Grid } from "@mui/material";
import { flutter, golang, js, rust } from "./card_description";
export default function AllProjects() {
    return (
      <section className="section projets">
        <h2 className="titre">My Projects</h2>
        <p className="sous-titre">
          Découvrez mes travaux en React, Next.js et plus encore. Je crée des applications modernes et réactives pour améliorer l'expérience utilisateur.
        </p>
  
        <div className="projects">
          <p className="title-project flutter">Flutter:</p>
          <Grid container spacing={4} justifyContent={"center"}>
            {Object.values(flutter).slice(0, 5).map((project, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                    <MediaCard project={project} />
                </Grid>
            ))}

          </Grid>
        </div>
  
        <div className="projects">
          <p className="title-project js">JavaScript:</p>
          <Grid container spacing={4} justifyContent={"center"}>
            {Object.values(js).slice(0, 3).map((project, index:number) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <MediaCard project={project} />
              </Grid>
            ))}
          </Grid>
        </div>
  
        <div className="projects">
          <p className="title-project rust">Rust:</p>
          <Grid container spacing={4} justifyContent={"center"}>
            {Object.values(rust).slice(0, 3).map((project, index: number) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <MediaCard project={project} />
              </Grid>
            ))}
          </Grid>
        </div>
  
        <div className="projects">
          <p className="title-project golang">Golang:</p>
          <Grid container spacing={4} justifyContent={"center"}>
            {Object.values(golang).slice(0, 4).map((project, index: number) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <MediaCard project={project} />
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    );
  }
  