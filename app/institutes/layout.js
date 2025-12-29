// export const metadata = {
//   title: "VAWE Institutes | Software Training and Internship in Vijayawada",
//   description:
//     "VAWE Institutes offers software training, certifications, and internships in Vijayawada.",
//   keywords: [
//     "Software training and internship in Vijayawada",
//     "Local software developers in Vijayawada",
//   ],
//   alternates: { canonical: "/institutes" },
//   openGraph: {
//     title: "VAWE Institutes | Vijayawada",
//     description:
//       "Hands-on training, certifications, and internships by VAWE.",
//     url: "/institutes",
//     type: "website",
//     images: [{ url: "/img1.jpg", width: 1200, height: 630 }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "VAWE Institutes | Vijayawada",
//     description:
//       "Hands-on training, certifications, and internships by VAWE.",
//     images: ["/img1.jpg"],
//   },
// };

// export default function InstitutesLayout({ children }) {
//   return children;
// }



// Metadata export (only supported fields)
export const metadata = {
  title: "VAWE Institutes | Software Training and Internship in Vijayawada",
  description: "VAWE Institutes offers software training, certifications, and internships in Vijayawada.",
  keywords: [
    "Software training and internship in Vijayawada",
    "Local software developers in Vijayawada",
  ],
  alternates: { canonical: "/institutes" },
  openGraph: {
    title: "VAWE Institutes | Vijayawada",
    description: "Hands-on training, certifications, and internships by VAWE.",
    url: "/institutes",
    type: "website",
    images: [{ url: "/img1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VAWE Institutes | Vijayawada",
    description: "Hands-on training, certifications, and internships by VAWE.",
    images: ["/img1.jpg"],
  },
};

// Custom viewport function (includes viewport and themeColor as per Next.js requirements)
export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#ffffff' },
      { media: '(prefers-color-scheme: dark)', color: '#00448a' },
    ],
  };
}

// Layout component
export default function InstitutesLayout({ children }) {
  return children;
}
