import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/LayoutUtils";
import { X } from "lucide-react";
import { InstagramIcon, DribbbleIcon } from "../ui/SocialIcons";

const footerLinks = {
  shop: [
    { name: "All Products", href: "/products" },
    { name: "New Arrivals", href: "/products?sort=newest" },
    { name: "Best Sellers", href: "/products?sort=popular" },
    { name: "Bundles", href: "/categories/bundles" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Philosophy", href: "/about#philosophy" },
    { name: "Contact", href: "/contact" },
    { name: "Terms of Service", href: "/terms" },
  ],
  support: [
    { name: "FAQs", href: "/faqs" },
    { name: "Refund Policy", href: "/refunds" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Shipping", href: "/shipping" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-50 pt-16 pb-8 border-t border-neutral-100">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-neutral-200">
                <Image 
                  src="/logo.png" 
                  alt="Memoria Logo" 
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <span className="text-base font-bold tracking-[0.2em] uppercase">
                MEMORIA
              </span>
            </Link>
            <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
              Curating premium digital assets for the modern creator. Quality, elegance, and performance in every pixel.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 mb-5">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-neutral-500 hover:text-black transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-neutral-500 hover:text-black transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 mb-5">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-neutral-500 hover:text-black transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Memoria Digital Products. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-400 hover:text-black transition-colors" aria-label="X (Twitter)">
              <X size={18} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-black transition-colors" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-black transition-colors" aria-label="Dribbble">
              <DribbbleIcon size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
