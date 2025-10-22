import Header from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export default function DefaultLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-normal">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
