import { ReactNode } from "react";
import "./globals.css";
//kjhgf

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
