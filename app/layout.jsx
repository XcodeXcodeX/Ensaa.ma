import "./globals.css";
import { Inter } from "next/font/google";

//components
import NavBar from "./Components/Sections/NavBar/NavBar";
import Footer from "./Components/Sections/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ensaa",
  description: "ADE Ensaa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
