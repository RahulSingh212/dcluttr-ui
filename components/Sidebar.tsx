import SidebarSection from "./SidebarSection";
import SideLineBar from "./SideLineBar";

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col w-40">
      <div className="w-full p-2"></div>
      <div className="w-full flex">
        <SideLineBar />
        <SidebarSection />
      </div>
    </div>
  );
}
