export const metadata = {
  title: "Website Packages in Vijayawada | VAWE Global Tech",
  description:
    "Choose from basic, semi-dynamic, dynamic, and customized website packages tailored for AP businesses.",
  keywords: [
    "Affordable software developers in AP",
    "Web application development in Andhra Pradesh",
  ],
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Website Packages | VAWE Global Tech",
    description:
      "Basic to customized packages for websites and platforms in AP.",
    url: "/packages",
    type: "website",
    images: [{ url: "/heroimg1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Packages | VAWE Global Tech",
    description:
      "Basic to customized packages for websites and platforms in AP.",
    images: ["/heroimg1.jpg"],
  },
};

export default function PackagesLayout({ children }) {
  return children;
}


