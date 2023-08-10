import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Myanmar Monhinga",
  description:
    "Try our classic mohinga and discover a favorite noodle soup you never knew you needed in your life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {" "}
        <div className="p-3 sm:p-5 md:p-7 lg:p-8 w-full min-h-screen bg-yellow-300 relative">
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
