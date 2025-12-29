import { redirect } from "next/navigation";

export const metadata = {
  title: "VAWE Global Tech | Vijayawada",
  description:
    "VAWE is the official brand of VAWE Global Tech in Vijayawada, Andhra Pradesh.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function VaweAliasPage() {
  redirect("/");
}


