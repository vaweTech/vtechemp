// export const metadata = {
//   title: "Software Products in Vijayawada | VAWE Global Tech",
//   description:
//     "LMS, Smart Attendance, Vehicle Tracking, and E‑commerce solutions built by VAWE Global Tech.",
//   keywords: [
//     "Enterprise software solutions in Vijayawada",
//     "Custom software development company in Vijayawada",
//   ],
//   alternates: { canonical: "/products" },
//   openGraph: {
//     title: "Products | VAWE Global Tech",
//     description:
//       "Explore LMS, Smart Attendance, Vehicle Tracking, and E‑commerce products.",
//     url: "/products",
//     type: "website",
//     images: [{ url: "/heroimg2.jpg", width: 1200, height: 630 }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Products | VAWE Global Tech",
//     description:
//       "Explore LMS, Smart Attendance, Vehicle Tracking, and E‑commerce products.",
//     images: ["/heroimg2.jpg"],
//   },
// };

// export default function ProductsLayout({ children }) {
//   return children;
// }



export const metadata = {
  title: "Software Products in Vijayawada | VAWE Global Tech",
  description:
    "LMS, Smart Attendance, Vehicle Tracking, and E-commerce solutions built by VAWE Global Tech.",
  keywords: [
    "Enterprise software solutions in Vijayawada",
    "Custom software development company in Vijayawada",
  ],
  alternates: {
    canonical: "https://vaweglobaltech.com/products",
  },
  openGraph: {
    title: "Products | VAWE Global Tech",
    description:
      "Explore LMS, Smart Attendance, Vehicle Tracking, and E-commerce products.",
    url: "https://vaweglobaltech.com/products",
    type: "website",
    images: [
      {
        url: "https://vaweglobaltech.com/heroimg2.jpg",
        width: 1200,
        height: 630,
        alt: "VAWE Global Tech Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | VAWE Global Tech",
    description:
      "Explore LMS, Smart Attendance, Vehicle Tracking, and E-commerce products.",
    images: ["https://vaweglobaltech.com/heroimg2.jpg"],
  },
};

export default function ProductsLayout({ children }) {
  return children;
}