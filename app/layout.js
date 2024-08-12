import { Inter } from "next/font/google";
import Nav from '@/components/Navbar';
import "./globals.css";
import AuthContextProvider from "@/authcontext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-pantry-bg"> {/* Corrected class name */}
        <AuthContextProvider>
          <Nav />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
