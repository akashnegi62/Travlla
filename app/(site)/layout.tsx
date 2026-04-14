import { ReactNode } from "react";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
