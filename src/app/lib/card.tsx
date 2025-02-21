import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard({ project }: { project: { img: string, title: string, description: string, url: string } }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 420 }}>
        <CardMedia
          sx={{ height: 244 }}
          image={project.img}
          title={project.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {project.description}
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
}

