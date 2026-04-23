// import Link from "next/link";

// export const metadata = {
//   title: "Page Not Found | VAWE Global Tech",
//   description: "The page you are looking for could not be found.",
//   robots: {
//     index: false,
//     follow: false,
//   },
// };

// export default function NotFound() {
//   return (
//     <div className="pt-20 md:pt-28 w-full px-6 mt-4 md:mt-6">
//       <div className="container mx-auto">
//         <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: "var(--vawe-navy)" }}>
//           Page not found
//         </h1>
//         <p className="mt-3 md:mt-4 text-sm lg:text-base xl:text-lg text-neutral-700">
//           The page you are looking for does not exist.
//         </p>
//         <div className="mt-4 md:mt-6">
//           <Link
//             href="/"
//             className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs lg:text-sm xl:text-base font-semibold text-white"
//             style={{ backgroundColor: "var(--vawe-teal)" }}
//           >
//             Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const boxRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    let step = 0;

    const animations = [
      "translateZ(-100px) rotateY(0deg)",
      "translateZ(-100px) rotateY(-90deg)",
      "translateZ(-100px) rotateY(-180deg)",
      "translateZ(-100px) rotateX(-90deg)",
    ];

    const interval = setInterval(() => {
      step = (step + 1) % animations.length;
      if (boxRef.current) {
        boxRef.current.style.transform = animations[step];
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white overflow-hidden relative">
      
      {/* Scene */}
      <div style={{ perspective: "400px" }}>
        <div
          ref={boxRef}
          className="relative w-[200px] h-[200px] transition duration-500"
          style={{
            transform: "translateZ(-100px)",
            transformStyle: "preserve-3d",
          }}
        >
          <Face style={{ transform: "rotateY(0deg) translateZ(100px)" }} label="4" />
          <Face style={{ transform: "rotateY(90deg) translateZ(100px)" }} label="0" />
          <Face style={{ transform: "rotateY(180deg) translateZ(100px)" }} label="4" />
          <Face style={{ transform: "rotateY(-90deg) translateZ(100px)" }} label="0" />
          <Face style={{ transform: "rotateX(90deg) translateZ(100px)" }} label="0" />
          <Face style={{ transform: "rotateX(-90deg) translateZ(100px)" }} label="0" />
        </div>
      </div>

      {/* Shadow */}
      <div className="absolute w-[300px] h-[30px] bg-black/20 blur-xl rounded-full top-[60%]" />

      {/* Text */}
      <div className="mt-16 text-center">
        <h2 className="text-black text-2xl font-semibold">
          Ooops page not found!
        </h2>

        <button
          onClick={() => router.push("/")}
          className="mt-5 px-5 py-2 border-2 border-black text-sm rounded-br-2xl shadow-[4px_4px_0_rgba(0,0,0,0.5)] hover:bg-black hover:text-white transition"
        >
          BACK TO HOME PAGE
        </button>
      </div>
    </div>
  );
}

function Face({ style, label }) {
  return (
    <div
      className="absolute w-[200px] h-[200px] flex items-center justify-center text-black text-[120px] border border-black bg-gray-100"
      style={{
        ...style,
        backfaceVisibility: "hidden",
      }}
    >
      {label}
    </div>
  );
}