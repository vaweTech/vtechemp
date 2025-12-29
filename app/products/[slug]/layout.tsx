/// <reference types="react" />

// const META = {
//   "lms": {
//     title: "LMS Software in Vijayawada | VAWE Global Tech",
//     description: "Learning Management System with courses, quizzes, certificates, and analytics.",
//   },
//   "smart-attendance": {
//     title: "Smart Attendance System in Vijayawada | VAWE Global Tech",
//     description: "Biometric/QR attendance with shifts, leave, and real-time reports.",
//   },
//   "vehicle-tracking-system": {
//     title: "Vehicle Tracking System in Vijayawada | VAWE Global Tech",
//     description: "GPS fleet tracking with live maps, geofencing, and alerts.",
//   },
//   "e-commerce-website": {
//     title: "E‑commerce Website Development in Vijayawada | VAWE Global Tech",
//     description: "Modern storefront with catalog, payments, orders, and analytics.",
//   },
// };

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const m = META[slug] || { title: "Product | VAWE Global Tech", description: "Product by VAWE Global Tech" };
//   return {
//     title: m.title,
//     description: m.description,
//     alternates: { canonical: `/products/${slug}` },
//     openGraph: {
//       title: m.title,
//       description: m.description,
//       url: `/products/${slug}`,
//       type: "product",
//       images: [{ url: "/heroimg3.png", width: 1200, height: 630 }],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: m.title,
//       description: m.description,
//       images: ["/heroimg3.png"],
//     },
//   };
// }

// export default function ProductSlugLayout({ children }) {
//   return children;
// }



import { ReactNode } from 'react';

const META = {
  lms: {
    title: "LMS Software in Vijayawada | VAWE Global Tech",
    description:
      "Learning Management System with courses, quizzes, certificates, and analytics.",
  },
  "smart-attendance": {
    title: "Smart Attendance System in Vijayawada | VAWE Global Tech",
    description:
      "Biometric/QR attendance with shifts, leave, and real-time reports.",
  },
  "vehicle-tracking-system": {
    title: "Vehicle Tracking System in Vijayawada | VAWE Global Tech",
    description:
      "GPS fleet tracking with live maps, geofencing, and alerts.",
  },
  "e-commerce-website": {
    title: "E-commerce Website Development in Vijayawada | VAWE Global Tech",
    description:
      "Modern storefront with catalog, payments, orders, and analytics.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const m =
    META[slug] ?? {
      title: "Product | VAWE Global Tech",
      description: "Product by VAWE Global Tech",
    };

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `/products/${slug}`,
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `/products/${slug}`,
      type: "website", // ✅ fixed
      images: [
        {
          url: "/heroimg3.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["/heroimg3.png"],
    },
  };
}

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      {children}
    </main>
  );
}
