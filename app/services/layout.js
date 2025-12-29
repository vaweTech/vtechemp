export const metadata = {
  title: "Software Services in Vijayawada | VAWE Global Tech",
  description:
    "Web, mobile, cloud-native, AI, DevOps, and API integrations for Andhra Pradesh businesses.",
  keywords: [
    "Software services in Vijayawada",
    "Web application development in Andhra Pradesh",
    "API integration and backend development in Vijayawada",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Software Services in Vijayawada | VAWE",
    description:
      "Web, mobile, cloud-native, AI, DevOps, and API integrations for AP businesses.",
    url: "/services",
    type: "website",
    images: [{ url: "/heroimg3.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Services in Vijayawada | VAWE",
    description:
      "Web, mobile, cloud-native, AI, DevOps, and API integrations for AP businesses.",
    images: ["/heroimg3.png"],
  },
};

export default function ServicesLayout({ children }) {
  return children;
}


