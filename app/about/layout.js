export const metadata = {
  title: "About VAWE Global Tech | Best IT Company in Vijayawada",
  description:
    "Learn about VAWE Global Tech, a leading software company in Vijayawada delivering web, mobile, and cloud solutions across Andhra Pradesh.",
  keywords: [
    "Best IT company in Vijayawada",
    "Software company in Vijayawada",
    "VAWE Global Tech Vijayawada",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About VAWE Global Tech | Vijayawada",
    description:
      "A software company in Vijayawada building modern web, mobile, and cloud products.",
    url: "/about",
    type: "website",
    images: [{ url: "/heroimg3.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About VAWE Global Tech | Vijayawada",
    description:
      "A software company in Vijayawada building modern web, mobile, and cloud products.",
    images: ["/heroimg3.png"],
  },
};

export default function AboutLayout({ children }) {
  return children;
}


