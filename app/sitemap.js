export default function sitemap() {
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
    // Core
    "low-budget-software-company-vijayawada",
    "advanced-tech-stacks-affordable-software-vijayawada",
    "affordable-app-development-andhra-pradesh",
    "full-stack-development-company-vijayawada",
    "cloud-native-ai-software-solutions-ap",
    "custom-erp-software-vijayawada-guide",
    // Expanded
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

  const now = new Date();

  const staticEntries = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === "/" ? "daily" : "weekly",
    priority: p === "/" ? 1 : 0.7,
  }));

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${base}/blogs/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}


