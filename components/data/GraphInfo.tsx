import Image from "next/image";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

interface GraphInfoProps {
  title: string;
  currentMonthValue: number;
  previousMonthValue: number;
}

export const GraphInfo = ({
  title,
  currentMonthValue,
  previousMonthValue,
}: GraphInfoProps) => {
  return (
    <div className="flex flex-col rounded-lg border-[1px] border-[#EBEBEB] w-[350px] bg-white flex-shink-0">
      <div className="flex w-full justify-between px-4 py-2 align-middle items-center">
        <p className="whitespace-nowrap">{title}</p>
        <QuestionMarkCircleIcon className="h-4 w-4 cursor-pointer" />
      </div>

      <div className="w-full h-[1px] bg-[#EBEBEB]" />

      <div className="flex flex-col w-full p-4 space-y-2">
        <div className="flex w-full justify-between items-center align-middle">
          <p className="font-bold text-3xl">{currentMonthValue}</p>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-end space-x-1">
              {currentMonthValue >= previousMonthValue ? (
                <ArrowUpIcon className="h-4 w-4 fill-[#1D874F]" />
              ) : (
                <ArrowDownIcon className="h-4 w-4 fill-[#1D874F]" />
              )}
              <p className="font-bold text-[#1D874F]">2.4%</p>
            </div>

            <p className="text-sm text-[#031B15]">vs {previousMonthValue} last month</p>
          </div>
        </div>
        <Image
          alt={title}
          src="/images/img_graph.svg"
          width={10}
          height={10}
          className="w-full h-full"
        />
      </div>

      <div className="w-full h-[1px] bg-[#EBEBEB]" />

      <div className="flex w-full space-x-5 px-4 py-2">
        <div className="flex align-middle items-center space-x-2">
          <div className="rounded-full h-2 w-2 bg-[#1D874F] flex-shrink-0" />
          <p className="whitespace-nowrap">This Month</p>
        </div>
        <div className="flex align-middle items-center space-x-2">
          <div className="rounded-full h-2 w-2 bg-[#E25D33] flex-shrink-0" />
          <p className="whitespace-nowrap">Last Month</p>
        </div>
      </div>
    </div>
  );
};
