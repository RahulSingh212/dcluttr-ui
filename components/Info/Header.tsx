import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Image from "next/image";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import {
  CalendarDateRangeIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { DateRangePicker } from "react-date-range";
import { formatDate } from "@/lib/utils";

import { RangeKeyDict } from "react-date-range";

export default function Header() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleDateRangeSelect = (ranges: RangeKeyDict) => {
    const range = ranges.selection;
    setStartDate(range.startDate!);
    setEndDate(range.endDate!);
  };

  const showCalendarHandler = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  return (
    <>
      <div className="w-full flex justify-between rounded-t-lg px-4 py-2 align-middle items-center">
        <h1 className="text-black">Quick Commerce</h1>
        <div className="flex space-x-2">
          <div className="flex space-x-2 border-[1px] px-3 py-2 rounded-lg align-middle items-center">
            <Image
              alt="graph"
              src="/icons/vector.svg"
              width={10}
              height={10}
              className="h-5 w-5"
            />
            <Switch id="airplane-mode" className="fill-[#027056]" />
          </div>
          <button
            className="flex space-x-3 border-[1px] px-3 py-2 rounded-lg align-middle items-center cursor-pointer"
            onClick={showCalendarHandler}
          >
            <CalendarDateRangeIcon className="h-5 w-5" />
            <p className="flex space-x-1 text-center">
              <span>{formatDate(startDate)}</span>
              <span>-</span>
              <span>{formatDate(endDate)}</span>
            </p>
            {isCalendarOpen ? (
              <ChevronUpIcon className="h-5 w-5" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      {isCalendarOpen && (
        <div className="relative">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleDateRangeSelect}
            className="absolute top-2 right-4 p-1 border-[1px] border-[#EBEBEB] rounded-lg"
          />
        </div>
      )}
    </>
  );
}
