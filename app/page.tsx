// import Image from "next/image";

import MainSection from "@/components/MainSection";
import Sidebar from "@/components/Sidebar";

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
