import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Planet Facts",
  description:
    "A web app that displays information about planets in our solar system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-[#070724] bg-background">
      <body className={`${inter.className} `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
