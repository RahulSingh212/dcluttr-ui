import { cn } from "@/lib/cn";
import Header from "./Header";
import { TabSection } from "./TabSection";
import { GraphInfo } from "../data/GraphInfo";
import { ChartInfo } from "../data/ChartInfo";
import { StatsInfo } from "./StatsInfo";
import { skuLevelDataList } from "@/lib/dataInfo";

export default function MainSection() {
  return (
    <div
      className={cn(
        "w-full flex flex-col overflow-y-scroll ",
        "border-[1px] border-[#EBEBEB] rounded-t-lg border-b-0",
        "mx-4 mt-3"
      )}
    >
      <Header />
      <div className="w-full h-[1px] bg-[#EBEBEB]" />
      <TabSection />
      <div className="w-full h-[1px] bg-[#EBEBEB]" />
      <div className="flex flex-col w-full p-4 bg-[#DFEAE8]/40 space-y-12">
        <div className="flex w-full space-x-1.5 overflow-x-scroll">
          <GraphInfo
            title="Sales (MRP)"
            currentMonthValue={125.49}
            previousMonthValue={119.69}
          />
          <GraphInfo
            title="Total Quantity Sold"
            currentMonthValue={125.49}
            previousMonthValue={119.69}
          />
          <ChartInfo title="Top Cities" />
        </div>

        <StatsInfo
          title={"SKU level data"}
          description={"Analytics for all your SKUs"}
          skuLevelDataList={skuLevelDataList}
        />

        <StatsInfo
          title={"City level data"}
          description={"Analytics for all your Cities"}
          skuLevelDataList={skuLevelDataList}
        />
      </div>
    </div>
  );
}
