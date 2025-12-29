import { Poppins, Orbitron, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-poppins", display: "swap" });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400","500","600","700","800","900"], variable: "--font-orbitron", display: "swap" });
const raleway = Raleway({ subsets: ["latin"], weight: ["300","400","500","600","700","800"], variable: "--font-raleway", display: "swap" });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vaweglobaltech.com"),
  themeColor: "#00448a",
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 5,
  // },
  title: {
    default: "Software Company in Vijayawada | VAWE Global Tech",
    template: "%s | VAWE Global Tech Vijayawada",
  },
  description:
    "VAWE Global Tech is a software development company in Vijayawada, Andhra Pradesh delivering affordable web, mobile, and cloud solutions.",
  keywords: [
    // Primary
    "Software company in Vijayawada",
    "Software development company in Andhra Pradesh",
    "Low budget software company in Vijayawada",
    "Affordable software developers in AP",
    "Best IT company in Vijayawada",
    "VAWE Global Tech Vijayawada",
    "Custom software development company in Vijayawada",
    "App development company in Vijayawada",
    "Web application development in Andhra Pradesh",
    "Software services in Vijayawada",
    // Secondary / Long-tail
    "Low-cost software development services in Vijayawada",
    "Advanced tech stack software developers in Andhra Pradesh",
    "Full-stack development company in Vijayawada",
    "AI and cloud-based software solutions in AP",
    "Affordable SaaS product development in Vijayawada",
    "Best web and mobile app developers in Vijayawada",
    "Small business software development in Andhra Pradesh",
    "Enterprise software solutions in Vijayawada",
    "Custom ERP software in Vijayawada",
    "Offshore software development company in AP",
    // Tech-focused
    "Modern software development with React, Node.js, Python",
    "Cloud-native software solutions in Vijayawada",
    "Scalable application development company in AP",
    "Agile software company in Vijayawada",
    "DevOps and automation experts in Andhra Pradesh",
    "API integration and backend development in Vijayawada",
    // Local SEO
    "IT company near Benz Circle Vijayawada",
    "Software company near Eluru Road",
    "Local software developers in Vijayawada",
    "Software companies in Guntur and Vijayawada",
    "Software training and internship in Vijayawada",
    // Brand + keyword
    "VAWE Global Tech software solutions",
    "VAWE Global Tech Vijayawada software company",
    "VAWE Global Tech low-budget software development",
    "VAWE Global Tech advanced tech software builders",
    // Brand alias (WAWE)
    "VAWE",
    "WAWE Global Tech",
    "WAWE software company in Vijayawada",
    "WAWE Global Tech Vijayawada",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Software Company in Vijayawada | VAWE Global Tech",
    description:
      "Affordable, modern web, mobile, and cloud software development in Vijayawada, Andhra Pradesh.",
    url: "/",
    siteName: "VAWE Global Tech",
    locale: "en_IN",
    type: "website",
    images: [
      { url: "/heroimg3.png", width: 1200, height: 630, alt: "VAWE Global Tech Vijayawada" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Company in Vijayawada | VAWE Global Tech",
    description:
      "Affordable, modern web, mobile, and cloud software development in Vijayawada, Andhra Pradesh.",
    images: ["/heroimg3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Technology",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${orbitron.variable} ${raleway.variable} antialiased min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VAWE Global Tech",
              alternateName: ["VAWE", "WAWE", "WAWE Global Tech"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "VAWE Global Tech",
              url: (process.env.NEXT_PUBLIC_SITE_URL || "https://vaweglobaltech.com"),
              potentialAction: {
                "@type": "SearchAction",
                target: `${process.env.NEXT_PUBLIC_SITE_URL || "https://vaweglobaltech.com"}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full grad-mc blur-3xl opacity-20 animate-glow"></div>
          <div className="absolute top-1/3 -right-24 w-[520px] h-[520px] rounded-full grad-co blur-3xl opacity-20 animate-glow"></div>
          <div className="absolute -bottom-20 left-1/4 w-[640px] h-[640px] rounded-full grad-mo blur-3xl opacity-15"></div>
        </div>
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
