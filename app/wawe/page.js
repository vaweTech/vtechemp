import { redirect } from "next/navigation";

export const metadata = {
  title: "WAWE Global Tech | VAWE Global Tech Vijayawada",
  description:
    "WAWE Global Tech is an alternate brand spelling for VAWE Global Tech in Vijayawada, Andhra Pradesh.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function WaweAliasPage() {
  redirect("/");
}


