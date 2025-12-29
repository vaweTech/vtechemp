export const metadata = {
  title: "Site Map | VAWE Global Tech Vijayawada",
  description:
    "Human-readable site map listing all key pages and blog articles of VAWE Global Tech.",
  alternates: { canonical: "/site-map" },
};

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://vaweglobaltech.com";

const staticPaths = [
  "/",
  "/about",
  "/services",
  "/products",
  "/packages",
  "/digital-marketing",
  "/institutes",
  "/contact",
  "/blogs",
  "/blog",
];

const blogSlugs = [
  "low-budget-software-company-vijayawada",
  "advanced-tech-stacks-affordable-software-vijayawada",
  "affordable-app-development-andhra-pradesh",
  "full-stack-development-company-vijayawada",
  "cloud-native-ai-software-solutions-ap",
  "custom-erp-software-vijayawada-guide",
  "software-company-in-vijayawada-guide",
  "software-development-company-andhra-pradesh",
  "affordable-software-developers-in-ap",
  "custom-software-development-company-vijayawada",
  "software-services-in-vijayawada-overview",
  "low-cost-software-development-vijayawada",
  "affordable-saas-product-development-vijayawada",
  "best-web-mobile-app-developers-vijayawada",
  "small-business-software-development-andhra-pradesh",
  "enterprise-software-solutions-vijayawada",
  "offshore-software-development-company-ap",
  "agile-software-company-vijayawada",
  "devops-automation-experts-andhra-pradesh",
  "api-integration-backend-development-vijayawada",
  "it-company-near-benz-circle-vijayawada",
  "software-company-near-eluru-road",
  "local-software-developers-vijayawada",
  "software-companies-guntur-vijayawada",
  "software-training-internship-vijayawada",
  "vawe-global-tech-software-solutions",
  "vawe-global-tech-vijayawada-software-company",
  "vawe-global-tech-low-budget-software-development",
  "vawe-global-tech-advanced-tech-software-builders",
];

export default function SiteMapPage() {
  const now = new Date();
  const staticRows = staticPaths.map((p) => ({
    url: `${base}${p}`,
    path: p,
    type: "Static",
    changeFrequency: p === "/" ? "daily" : "weekly",
    priority: p === "/" ? 1 : 0.7,
    lastModified: now.toISOString().slice(0, 10),
  }));

  const blogRows = blogSlugs.map((slug) => ({
    url: `${base}/blogs/${slug}`,
    path: `/blogs/${slug}`,
    type: "Blog",
    changeFrequency: "weekly",
    priority: 0.6,
    lastModified: now.toISOString().slice(0, 10),
  }));

  const rows = [...staticRows, ...blogRows];

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-[var(--vawe-navy)]">Site Map</h1>
      <p className="mt-2 text-neutral-700 max-w-2xl">
        Human-readable site map of key pages and all blog articles.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-left border border-black/10 rounded-xl overflow-hidden">
          <thead className="bg-black/5">
            <tr>
              <th className="p-3">Path</th>
              <th className="p-3">Full URL</th>
              <th className="p-3">Type</th>
              <th className="p-3">Change Freq</th>
              <th className="p-3">Priority</th>
              <th className="p-3">Last Modified</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.url} className="border-t border-black/10">
                <td className="p-3 text-[var(--vawe-navy)]"><a href={r.path} className="underline hover:no-underline">{r.path}</a></td>
                <td className="p-3 text-neutral-700"><a href={r.url} target="_blank" className="underline hover:no-underline" rel="noopener noreferrer">{r.url}</a></td>
                <td className="p-3">{r.type}</td>
                <td className="p-3">{r.changeFrequency}</td>
                <td className="p-3">{r.priority}</td>
                <td className="p-3">{r.lastModified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


