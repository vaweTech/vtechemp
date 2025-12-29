"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DigitalMarketing() {
  return (
    <div className="pt-28" style={{ backgroundColor: '#fef9f5' }}>
      <section className="w-full px-6">
        <div className="container mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold font-(--font-orbitron)" style={{ background: 'var(--vawe-bg-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            Digital Marketing
          </motion.h1>
          <p className="mt-4 text-neutral-700 max-w-3xl">We build acquisition engines across SEO, social, paid media, email, and analytics — designed for measurable growth and a premium, modern brand experience.</p>
        </div>
      </section>

      {[
        {
          title: "Search Engine Optimization (SEO)",
          copy: "Boost your online visibility and attract high-intent traffic.",
          bullets: ["On Page SEO", "Off Page SEO", "Technical SEO", "SEO Audit", "Full Service SEO", "Website SEO", "Youtube SEO", "Keyword Research"],
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
          headingImg: "/seo-heading.jpg", // Reference to SEO heading image
          color: "#f56c53",
          reverse: true,
        },
        {
          title: "Search Engine Marketing (SEM / PPC)",
          copy: "Drive instant, measurable results through paid advertising.",
          bullets: ["Keyword bidding", "Ad copy optimization", "Conversion tracking", "A/B testing"],
          img: "/dsemimg.jpg",
          color: "#00448a",
        },
        {
          title: "Social Media Marketing",
          copy: "Build brand awareness and community engagement across all major platforms.",
          bullets: ["Business Page Creation", "Page setup & Optimization", "Accounts Management", "Creative Poster Designs", "Reels Designing", "Organic & Paid Advertising", "Integrated Social Campaigns", "Lead Generations", "Influencer Marketing", "Hashtag Generator", "Google Ads Run", "Youtube Video Making", "Youtube Page Services"],
          img: "/dsocialmarketing.jpg",
          headingImg: "/social-media-heading.jpg", // Reference to Social Media Marketing heading image
          color: "#f56c53",
          reverse: true,
        },
        {
          title: "Content Marketing",
          copy: "Attract, educate, and convert with powerful storytelling.",
          bullets: ["Blog writing", "Video creation", "Infographics", "Email newsletters"],
          img: "/dcontentimg.jpg",
          color: "#00448a",
        },
        {
          title: "Email Marketing & Automation",
          copy: "Turn leads into loyal customers with personalized email campaigns.",
          bullets: ["Lead segmentation", "Automation setup", "Performance analytics", "Retention strategies"],
          img: "/dEmail Marketing.jpg",
          color: "#f56c53",
          reverse: true,
        },
        {
          title: "Analytics & Performance Tracking",
          copy: "Get full visibility into your marketing ROI.",
          bullets: ["Google Analytics", "Tag Manager", "Search Console", "Meta Insights"],
          img: "/danalyticsperformance.png",
          color: "#00448a",
        },
        {
          title: "Brand Strategy & Design",
          copy: "Create a memorable and consistent digital presence.",
          bullets: ["Logo Design", "Boucher Design", "Product Design", "Banner Design", "Poster Design", "Business Cards", "Menu Cards", "Certificates Design", "Invitations E - Cards", "Video Invitations", "Video Editing", "PPT Presentations"],
          img: "/dbrand.jfif",
          headingImg: "/graphic-design-heading.jpg", // Reference to Graphic Designing heading image
          color: "#f56c53",
          reverse: true,
        },
        {
          title: "Web Design & Development",
          copy: "Build stunning, functional websites that drive results and engage your audience.",
          bullets: ["Wordpress & PHP Development", "Mobile Friendly Theme Design", "Website Redesign", "Website Maintenance", "Mobile App Maintenance", "1 year Domain /Hosting", "SEO Friendly", "E-Commerce Websites", "Dynamic / Static Web Designing"],
          img: "/websiteimg.png",
          headingImg: "/web-design-heading.jpg", // Reference to Web Design & Development heading image
          color: "#00448a",
        },
      ].map((s, i) => {
        // All headings are black, regardless of card color
        const headingColor = '#000000';
        return (
        <section key={s.title} className="py-4 md:py-8">
          <div className="w-full px-6">
            <div className="container mx-auto max-w-6xl">
              <div className={`relative grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-xl ${s.reverse ? 'md:grid-flow-dense' : ''}`} style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fef9f5 100%)' }}>
                <div className={`relative p-6 md:p-8 flex flex-col justify-center ${s.reverse ? 'md:order-2' : ''} z-10`}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-50 rounded-lg blur-sm"></div>
                      <div className="relative h-10 w-10 rounded-lg flex items-center justify-center" style={{ background: s.color }}>
                        <span className="text-white font-bold text-base">{i + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }}></div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: headingColor }}>{s.title}</h3>
                  <p className="text-base text-neutral-600 leading-relaxed mb-6">{s.copy}</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {s.bullets.map((b, idx) => (
                      <motion.div 
                        key={b} 
                        initial={{ opacity: 0, x: -20 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-2 group cursor-pointer"
                      >
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150" style={{ backgroundColor: s.color }}></div>
                        <div className="flex-1 p-2 rounded-lg transition-all duration-300 group-hover:shadow-md border" style={{ 
                          borderColor: `${s.color}30`,
                          background: `linear-gradient(135deg, ${s.color}05, transparent)` 
                        }}>
                          <span className="text-neutral-800 font-medium text-sm">{b}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5" style={{ background: `radial-gradient(circle, ${s.color}, transparent)` }}></div>
                </div>
                
                <div className={`relative h-64 md:h-auto ${s.reverse ? 'md:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br" style={{ background: `linear-gradient(135deg, ${s.color}15, transparent)` }}></div>
                  <div className="relative w-full h-full flex items-center justify-center p-6 md:p-8">
                    <div className="relative w-full h-full max-w-xl mx-auto group">
                      <div className="absolute -inset-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" style={{ background: `linear-gradient(135deg, ${s.color}, transparent)` }}></div>
                      <div className="relative rounded-xl overflow-hidden shadow-lg border bg-white/50 backdrop-blur-sm" style={{ borderColor: `${s.color}40` }}>
                        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-6">
                          {s.headingImg ? (
                            <Image 
                              src={s.headingImg} 
                              alt={s.title} 
                              className="w-full h-full object-cover max-h-64 rounded-lg" 
                              loading="lazy" 
                              width={100}
                              height={100}
                              referrerPolicy="no-referrer" 
                              onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src=s.img; }} 
                            />
                          ) : (
                            <Image 
                                src={s.img}
                                alt={s.title}
                                width={100}
                                height={100}
                                className="w-full h-full object-contain max-h-64"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                              />

                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-6 left-6 w-16 h-16 rounded-full opacity-20 blur-xl animate-pulse" style={{ background: s.color }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
      })}
    </div>
  );
}


