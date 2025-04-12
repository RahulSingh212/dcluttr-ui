import Image from "next/image";
import SidebarSection from "./SidebarSection";
import SideLineBar from "./SideLineBar";
import {
  ChevronDoubleLeftIcon,
  ArrowsUpDownIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col w-[288px]">
      <div className="w-full flex justify-between px-1.5 py-3 space-x-1">
        <Image
          alt="Perfora"
          src="/logos/img_perfora_logo.svg"
          width={20}
          height={20}
          className="h-10 w-10 rounded-xl cursor-pointer"
        />
        <div className="w-full flex px-2 align-middle items-center">
          <div className="w-full flex border-[1px] border-[#309E96] rounded-xl p-1.25 justify-between align-middle items-center">
            <div className="flex w-full items-center align-middle">
              <div className="flex items-center justify-center h-7 w-7 p-1 rounded-xl cursor-pointer text-white bg-[#309E96] flex-shrink-0 font-semibold text-sm">
                SS
              </div>
              <p className="text-black ml-3">Text_brand</p>
            </div>
            <ArrowsUpDownIcon className="h-5 w-5 fill-black mr-1" />
          </div>
          <ChevronDoubleLeftIcon className="h-4 w-4 flex-shrink-0 fill-[#027056] ml-2" />
        </div>
      </div>
      <div className="w-full h-full flex">
        <SideLineBar />
        <SidebarSection />
      </div>
    </div>
  );
}
