import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface StatsHeaderProps {
  title: string;
  description: string;
}

export const StatsHeader = ({ title, description }: StatsHeaderProps) => {
  return (
    <div className="w-full flex justify-between align-middle items-center">
      <div className="flex flex-col space-y-[0.5px]">
        <h2 className="font-semibold text-xl text-black">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
      <button className="flex text-white space-x-1 align-middle items-center px-4 py-2 rounded-lg bg-[#027056] cursor-pointer">
        <span>Filters(1)</span>
        <ChevronDownIcon className="h-4 w-4 fill-white" />
      </button>
    </div>
  );
};
