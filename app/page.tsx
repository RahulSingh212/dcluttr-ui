// import Image from "next/image";
"use client"

import MainSection from "@/components/Info/MainSection";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="bg-white w-full h-screen">
      <main className="w-full h-full flex">
        <Sidebar />
        <MainSection />
      </main>
    </div>
  );
}
