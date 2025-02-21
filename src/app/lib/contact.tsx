"use client";
import { useRef, useState } from "react";
import { Modal, Box, TextField, Button, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { dog } from "./art";
import emailjs from 'emailjs-com';

export default function ContactSection() {
  const [open, setOpen] = useState(false); 

  return (
    <section className="section contact">
      <h2 className="titre about">Do you want contact me?</h2>

      {/* Bouton qui ouvre la modal */}
      <Button
        className="contact-button"
        onClick={() => setOpen(true)}
      >
        click here
      </Button>

        <div className="ascii-art-container">
            <p className="art">
                {dog}
            </p>
        </div>
        <p className="message-text">I will wait for your message...</p>

      <ContactModal open={open} handleClose={() => setOpen(false)} />
    </section>
  );
}

interface ContactModalProps {
  open: boolean; // Booléen pour ouvrir/fermer
  handleClose: () => void; // Fonction pour fermer
}

function ContactModal({ open, handleClose }: ContactModalProps) {
    // États pour les champs du formulaire
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const form = useRef<HTMLFormElement>(null);
  

    const sendMail = (mail: string, msg: string) => {
      const templateParams = {
        user_email: mail,
        message: msg,
      };
  
      if (form.current) {
        emailjs.send('service_a', 'template_7lpaoo9', templateParams, '2_d28xjooPTm1DxZD')
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Votre message a été envoyé !");
              handleClose(); // Ferme la modal après l'envoi
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert("Une erreur est survenue, veuillez réessayer.");
            }
          );
      }
    };
  
    return (
      <Modal open={open} onClose={handleClose} aria-labelledby="contact-title">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <p className="mail">Send a mail</p>
  
          {/* Bouton de fermeture avec l'icône Close */}
          <IconButton
            edge="end"
            color="primary"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              borderRadius: "50%",
              padding: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
  
          {/* Titre de la modal */}
          <Typography id="contact-title" variant="h6" component="h2" gutterBottom>
            Send a Mail
          </Typography>
  
          {/* Formulaire */}
          <form ref={form} onSubmit={(e) => { e.preventDefault(); sendMail(email, message); }}>
            {/* Champs pour l'email */}
            <TextField
              fullWidth
              label="Your Email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Récupérer l'email
            />
            {/* Champs pour le message */}
            <TextField
              fullWidth
              label="Your Message"
              multiline
              rows={4}
              margin="normal"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Récupérer le message
            />
  
            {/* Bouton envoyer */}
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              fullWidth
              type="submit"
            >
              Send
            </Button>
          </form>
        </Box>
      </Modal>
    );
  }
  