import Image from "next/image";

import { StatsHeader } from "./StatsHeader";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { SkuLevelData } from "@/lib/dataInfo";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface StatsInfoProps {
  title: string;
  description: string;
  skuLevelDataList: SkuLevelData[];
}

export const StatsInfo = ({
  title,
  description,
  skuLevelDataList,
}: StatsInfoProps) => {
  return (
    <div className="w-full flex flex-col space-y-4">
      <StatsHeader title={title} description={description} />

      <div className="flex flex-col rounded-lg border-[1px] border-[#EBEBEB] overflow-x-scroll">
        <div className="flex w-full bg-white rounded-lg rounded-b-none">
          <div className="flex justify-center align-middle items-center space-x-1 w-48 border-b-[1px] border-[#EBEBEB]">
            <Image
              alt="graph"
              src="/icons/vector.svg"
              width={10}
              height={10}
              className="h-5 w-5"
            />
            <span>SKU Name</span>
          </div>

          <div className="flex h-full w-[1px] bg-[#EBEBEB]" />

          <div className="flex flex-col border-b-[1px] border-[#EBEBEB]">
            <div className="flex justify-center py-3">Availability</div>

            <div className="w-full h-[1px] bg-[#EBEBEB]" />

            <div className="flex py-3">
              <button className="flex space-x-1 align-middle items-center w-[145px] justify-center cursor-pointer">
                <span>Sales</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>

              <button className="flex space-x-1 align-middle items-center w-[145px] justify-center cursor-pointer">
                <span>Out of Stock</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>

              <button className="flex space-x-1 align-middle items-center w-[145px] justify-center cursor-pointer">
                <span>Total Inventory</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex h-full w-[1px] bg-[#EBEBEB]" />

          <div className="flex flex-col border-b-[1px] border-[#EBEBEB]">
            <div className="flex justify-center py-3">Visibility</div>

            <div className="w-full h-[1px] bg-[#EBEBEB]" />

            <div className="flex py-3">
              <button className="flex space-x-1 align-middle items-center w-[145px] justify-center cursor-pointer">
                <span>Average Rank</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>

              <button className="flex space-x-1 align-middle items-center w-[145px] justify-center cursor-pointer">
                <span>Est. Traffic</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>

              <button className="flex space-x-1 align-middle items-center w-[145px] justify-center cursor-pointer">
                <span>Est. Impressions</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex h-full w-[1px] bg-[#EBEBEB]" />
        </div>

        <div className="w-full flex flex-col overflow-x-scroll">
          {skuLevelDataList.map((skuInfo: SkuLevelData, index: number) => (
            <SkulLevelTile key={index} skuInfo={skuInfo} isBold={false} />
          ))}
          <SkulLevelTile
            skuInfo={{
              skuName: "Total",
              availability: {
                sales: "₹2,93,132.12",
                outOfStock: "16%",
                totalInventory: "2931",
              },
              visibility: {
                averageRank: "8.3",
                estTraffic: "61,985",
                estImpressions: "2,61,768",
              },
            }}
            isBold={true}
          />
        </div>
      </div>
    </div>
  );
};

interface SkuLevelTileProps {
  skuInfo: SkuLevelData;
  isBold: boolean;
}

const SkulLevelTile = ({ skuInfo, isBold }: SkuLevelTileProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={cn(
        "flex w-full",
        isActive ? "bg-[#DFEAE8]/40" : "bg-white",
        isBold ? "font-bold" : ""
      )}
    >
      <button className="flex space-x-1.5 items-center pl-4 w-48 min-h-12 border-b-[1px] border-[#EBEBEB]">
        {!isBold && (
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e: any) => setIsActive((prev) => !prev)}
            className="w-5 h-5 accent-[#027056] cursor-pointer"
          />
        )}
        <span className={cn("whitespace-nowrap", !isBold && "underline")}>
          {skuInfo.skuName}
        </span>
      </button>

      <div className="flex h-full w-[1px] bg-[#EBEBEB]" />

      <div className="flex align-middle items-center border-b-[1px] border-[#EBEBEB] text-[#4E5E5A]">
        <div className="flex flex-col justify-center align-middle items-center w-[145px] space-y-1">
          <span>{skuInfo.availability.sales}</span>
          {skuInfo.availability.prevSales && (
            <span>{skuInfo.availability.prevSales}</span>
          )}
          {skuInfo.availability.changeSales && (
            <div className="flex align-middle items-center text-[#1D874F] fill-[#1D874F]">
              {skuInfo.availability.changeSales > 0 ? (
                <ArrowUpIcon className="h-4 w-4" />
              ) : (
                <ArrowDownIcon className="h-4 w-4" />
              )}
              <span className="ml-1">{skuInfo.availability.changeSales}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center align-middle items-center w-[145px] space-y-1">
          <span>{skuInfo.availability.outOfStock}</span>
          {skuInfo.availability.prevStock && (
            <span>{skuInfo.availability.prevStock}</span>
          )}
          {skuInfo.availability.changeStock && (
            <div className="flex align-middle items-center text-[#1D874F] fill-[#1D874F]">
              {skuInfo.availability.changeStock > 0 ? (
                <ArrowUpIcon className="h-4 w-4" />
              ) : (
                <ArrowDownIcon className="h-4 w-4" />
              )}
              <span className="ml-1">{skuInfo.availability.changeStock}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center align-middle items-center w-[145px] space-y-1">
          <span>{skuInfo.availability.totalInventory}</span>
          {skuInfo.availability.prevInv && (
            <span>{skuInfo.availability.prevInv}</span>
          )}
          {skuInfo.availability.changeInv && (
            <div className="flex align-middle items-center text-[#1D874F] fill-[#1D874F]">
              {skuInfo.availability.changeInv > 0 ? (
                <ArrowUpIcon className="h-4 w-4" />
              ) : (
                <ArrowDownIcon className="h-4 w-4" />
              )}
              <span className="ml-1">{skuInfo.availability.changeInv}</span>
            </div>
          )}
          {skuInfo.availability.changeInv === null && <span>-</span>}
        </div>
      </div>

      <div className="flex h-full w-[1px] bg-[#EBEBEB]" />

      <div className="flex align-middle items-center border-b-[1px] border-[#EBEBEB] text-[#4E5E5A]">
        <div className="flex flex-col justify-center align-middle items-center w-[145px] space-y-1">
          <span>{skuInfo.visibility.averageRank}</span>
          {skuInfo.visibility.prevAvgRank && (
            <span>{skuInfo.visibility.prevAvgRank}</span>
          )}
          {skuInfo.visibility.changeAvgRank && (
            <div className="flex align-middle items-center text-[#1D874F] fill-[#1D874F]">
              {skuInfo.visibility.changeAvgRank > 0 ? (
                <ArrowUpIcon className="h-4 w-4" />
              ) : (
                <ArrowDownIcon className="h-4 w-4" />
              )}
              <span className="ml-1">{skuInfo.visibility.changeAvgRank}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center align-middle items-center w-[145px] space-y-1">
          <span>{skuInfo.visibility.estTraffic}</span>
          {skuInfo.visibility.prevEstTraffic && (
            <span>{skuInfo.visibility.prevEstTraffic}</span>
          )}
          {skuInfo.visibility.changeEstTraffic && (
            <div className="flex align-middle items-center text-[#1D874F] fill-[#1D874F]">
              {skuInfo.visibility.changeEstTraffic > 0 ? (
                <ArrowUpIcon className="h-4 w-4" />
              ) : (
                <ArrowDownIcon className="h-4 w-4" />
              )}
              <span className="ml-1">
                {skuInfo.visibility.changeEstTraffic}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center align-middle items-center w-[145px] space-y-1">
          <span>{skuInfo.visibility.estImpressions}</span>
          {skuInfo.visibility.prevEstImpressions && (
            <span>{skuInfo.visibility.prevEstImpressions}</span>
          )}
          {skuInfo.visibility.changeEstImpressions && (
            <div className="flex align-middle items-center text-[#1D874F] fill-[#1D874F]">
              {skuInfo.visibility.changeEstImpressions > 0 ? (
                <ArrowUpIcon className="h-4 w-4" />
              ) : (
                <ArrowDownIcon className="h-4 w-4" />
              )}
              <span className="ml-1">
                {skuInfo.visibility.changeEstImpressions}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex h-full w-[1px] bg-[#EBEBEB]" />
    </div>
  );
};
