import Image from "next/image";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/cn";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

interface ChartInfoProps {
  title: string;
}

export const ChartInfo = ({ title }: ChartInfoProps) => {
  return (
    <div className="flex flex-col rounded-lg border-[1px] border-[#EBEBEB] w-[350px] bg-white flex-shink-0">
      <div className="flex w-full justify-between px-4 py-2 align-middle items-center">
        <h2 className="whitespace-nowrap">{title}</h2>
        <QuestionMarkCircleIcon className="h-4 w-4 cursor-pointer" />
      </div>

      <div className="w-full h-[1px] bg-[#EBEBEB]" />

      <div className="flex w-full p-4 pb-1">
        <Image
          alt={title}
          src="/images/img_chart.svg"
          width={10}
          height={10}
          className="w-[62.5%] h-full mx-auto"
        />
      </div>

      <div className="w-full flex flex-col p-4 pt-0 space-y-1">
        <InfoTile
          name="New Delhi"
          color="bg-[#6C4FED]"
          amount="26.5L"
          precentage={35}
          change={1.2}
        />
        <InfoTile
          name="Mumbai"
          color="bg-[#EA6153]"
          amount="36.4L"
          precentage={23}
          change={-3.3}
        />
        <InfoTile
          name="West Bengal"
          color="bg-[#F7C245]"
          amount="12.2L"
          precentage={21}
          change={-2.3}
        />
        <InfoTile
          name="Others"
          color="bg-[#D9D9D9]"
          amount="24.3L"
          precentage={9}
          change={1.09}
        />
      </div>
    </div>
  );
};

interface InfoTileProps {
  name: string;
  color: string;
  amount: string;
  precentage: number;
  change: number;
}

const InfoTile = ({
  name,
  color,
  amount,
  precentage,
  change,
}: InfoTileProps) => {
  return (
    <div className="w-full flex justify-between">
      <div className="flex align-middle items-center space-x-2 min-w-24">
        <div className={cn("rounded-full h-2 w-2 flex-shrink-0", color)} />
        <p className="whitespace-nowrap text-[#7D7D7E]">{name}</p>
      </div>
      <div className="flex space-x-1 align-middle items-center">
        <p className="font-bold">{amount}</p>
        <p className="text-[#7D7D7E] px-1 py-0.5 bg-[#EBEBEB]">{precentage}%</p>
        <div
          className={cn(
            "flex align-middle items-center space-x-1",
            change > 0
              ? "text-[#1D874F] fill-[#1D874F]"
              : "text-[#F31D1D] fill-[#F31D1D]"
          )}
        >
          {change > 0 ? (
            <ArrowUpIcon className="h-4 w-4" />
          ) : (
            <ArrowDownIcon className="h-4 w-4" />
          )}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
    </div>
  );
};
