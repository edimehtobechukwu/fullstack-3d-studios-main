"use client";
import "./globals.css";
import { NavBar, Footer, Contact } from "@/components";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "fullstack3dstudios.com",
//   description: "",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const contactNeeded = ["/contact"];
  const noContact = contactNeeded.includes(pathName);

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/png" href="/fs3d-icon.png" />
      </head>
      <body>
        <NavBar />
        {children}
        {!noContact && <Contact />}
        <Footer />
      </body>
    </html>
  );
}
