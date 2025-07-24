import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
