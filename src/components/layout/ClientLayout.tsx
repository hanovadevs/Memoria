"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartOverlay } from "@/components/ui/CartOverlay";
import { PageWrapper } from "@/components/ui/PageWrapper";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/sign-in") || pathname?.startsWith("/sign-up");

  return (
    <>
      {!isAuthPage && <Navbar />}
      <CartOverlay />
      <main className="flex-grow">
        <PageWrapper>
          {children}
        </PageWrapper>
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
}
