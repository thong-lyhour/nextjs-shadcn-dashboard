import FooterSection from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-5">
        <Navbar />
        {children}
      </div>
      <div></div>

      {/* <FooterSection /> */}
    </>
  );
}
