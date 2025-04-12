import Image from "next/image";
import { PlusIcon } from "@heroicons/react/16/solid";

export default function SideLineBar() {
  return (
    <div className="h-full flex flex-col justify-between p-1.5">
      <div className="flex flex-col space-y-3">
        <Image
          alt="Mama Earth"
          src="/logos/img_mama_earth_logo.svg"
          width={20}
          height={20}
          className="h-10 w-10 rounded-xl cursor-pointer"
        />
        <Image
          alt="Boat"
          src="/logos/img_boat_logo.svg"
          width={20}
          height={20}
          className="h-10 w-10 rounded-xl cursor-pointer"
        />
        <button className="h-10 w-10 rounded-xl border-[1px] border-[#B4BBB9] cursor-pointer">
          <PlusIcon className="h-5 w-5 fill-[#1D874F] mx-auto" />
        </button>
      </div>
      <div className="flex flex-col space-y-4 mb-6">
        <Image
          alt="profile"
          src="/icons/users.svg"
          height={10}
          width={10}
          className="h-10 w-10 p-1.5 rounded-xl fill-[#7E8986] cursor-pointer"
        />
        <div className="flex items-center justify-center h-10 w-10 rounded-full cursor-pointer text-white bg-blue-600 flex-shrink-0 font-semibold">
          SS
        </div>
      </div>
    </div>
  );
}
