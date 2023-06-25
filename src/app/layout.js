import "./globals.css";
import Link from "next/link";
import { Inter, Jost, Righteous, Kablammo, Permanent_Marker } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});
const permanent_marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent_marker",
});

export const metadata = {
  title: "Ece 024",
  description: "Web App for displaying chess leaderboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-dark text-text-white ${inter.variable} ${righteous.variable} ${jost.variable} ${permanent_marker.variable}`}
      >
        <main className="relative lg:w-[50%] min-h-screen mx-auto px-2">
          <header className="py-4">
            {" "}
            <Link href={"/"} className="font-permanent_marker text-2xl">
              <span className="text-light-green">Chess Lords</span>{" "}
              <span className="text-orange-500">♚</span>
            </Link>
          </header>

          {children}
        </main>
      </body>
    </html>
  );
}
