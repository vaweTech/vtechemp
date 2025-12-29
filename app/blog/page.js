export const metadata = {
  title: "Blog | Software Company in Vijayawada | VAWE Global Tech",
  description:
    "Insights on affordable software, app development, cloud-native, AI, and full-stack solutions in Vijayawada and Andhra Pradesh.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | VAWE Global Tech Vijayawada",
    description:
      "Guides and insights on affordable, modern software development in Vijayawada and Andhra Pradesh.",
    url: "/blog",
    siteName: "VAWE Global Tech",
    type: "website",
    images: [{ url: "/heroimg3.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | VAWE Global Tech Vijayawada",
    description:
      "Guides and insights on affordable, modern software development in Vijayawada and Andhra Pradesh.",
    images: ["/heroimg3.png"],
  },
};

const posts = [
  {
    title: "Top 5 Reasons to Choose a Low-Budget Software Company in Vijayawada",
    slug: "low-budget-software-company-vijayawada",
    date: "2025-11-07",
    excerpt:
      "Discover how a low-cost, high-impact software partner in Vijayawada delivers value without compromising quality.",
    tags: ["Low budget", "Vijayawada", "Software company"],
  },
  {
    title:
      "How VAWE Global Tech Uses Advanced Tech Stacks to Build Affordable Software",
    slug: "advanced-tech-stacks-affordable-software-vijayawada",
    date: "2025-11-07",
    excerpt:
      "React, Node.js, Python, cloud-native patterns and DevOps for scalable, affordable builds in AP.",
    tags: ["React", "Node.js", "Python", "Cloud"],
  },
  {
    title: "Affordable App Development Services in Andhra Pradesh",
    slug: "affordable-app-development-andhra-pradesh",
    date: "2025-11-07",
    excerpt:
      "From MVPs to enterprise apps—feature prioritization and cloud-first deployment for AP businesses.",
    tags: ["App development", "Andhra Pradesh"],
  },
  {
    title: "Full-Stack Development Company in Vijayawada: What to Expect",
    slug: "full-stack-development-company-vijayawada",
    date: "2025-11-07",
    excerpt:
      "Front-end, back-end, APIs, CI/CD and observability—end-to-end capabilities for faster delivery.",
    tags: ["Full-stack", "APIs", "DevOps"],
  },
  {
    title: "Cloud-Native and AI-Driven Software Solutions in AP",
    slug: "cloud-native-ai-software-solutions-ap",
    date: "2025-11-07",
    excerpt:
      "Kubernetes, serverless, MLOps and AI integrations that scale with your business in Andhra Pradesh.",
    tags: ["Cloud-native", "AI", "AP"],
  },
  {
    title: "Custom ERP Software in Vijayawada: A Guide for SMEs",
    slug: "custom-erp-software-vijayawada-guide",
    date: "2025-11-07",
    excerpt:
      "When to build, how to scope, and cost-effective ERP implementation tips for local SMEs.",
    tags: ["ERP", "SMEs", "Vijayawada"],
  },
];

export default function BlogIndexPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-[var(--vawe-navy)]">Blog</h1>
      <p className="mt-2 text-neutral-700 max-w-2xl">
        Practical insights on affordable, modern software development for businesses in Vijayawada and Andhra Pradesh.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-xl border border-black/10 p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[var(--vawe-navy)]">{post.title}</h2>
            <p className="mt-2 text-neutral-700">{post.excerpt}</p>
            <div className="mt-3 text-sm text-neutral-500">{new Date(post.date).toLocaleDateString()}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="text-xs bg-black/5 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}


