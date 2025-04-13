import Image from "next/image";
import { useState } from "react";
import { tabList } from "@/lib/tabLinks";
import { cn } from "@/lib/cn";

export const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full flex px-4 py-2">
      <div className="flex space-x-2 border-[1px] border-[#EBEBEB] rounded-xl p-1">
        {tabList.map((tab: any, index: number) => (
          <button
            key={index}
            className={cn(
              "relative flex space-x-2 px-5 py-2 rounded-xl items-center align-middle cursor-pointer justify-center",
              activeTab === index ? "bg-[#DFEAE8]" : ""
            )}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            <Image
              alt={tab.name}
              src={tab.imageUrl}
              width={20}
              height={20}
              className={cn(
                "h-5 w-5",
                activeTab === index ? "opacity-100" : "opacity-40"
              )}
            />
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
