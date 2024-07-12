import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer maintainerName="Mick Suraj" />
    </div>
  );
};

export default HomeLayout;
