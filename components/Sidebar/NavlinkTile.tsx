import { cn } from "@/lib/cn";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

interface NavlinkTileProps {
  href: string;
  text: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  subLinks?: { name: string; display: string; href: string }[];
}

export default function NavlinkTile({
  href,
  text,
  icon: Icon,
  subLinks,
}: NavlinkTileProps) {
  const [sublinksCollapsed, setSublinksCollapsed] = useState(true);

  function handleCtaClick(event?: React.MouseEvent<HTMLButtonElement>) {
    event?.stopPropagation();
    event?.preventDefault();
    setSublinksCollapsed(!sublinksCollapsed);
  }

  const onClickHandler = async () => {};

  return (
    <>
      <Link
        href={href}
        onClick={onClickHandler}
        className={cn("h-11 pl-1 pr-4 flex items-center hover:bg-[#DFEAE8] rounded-xl")}
      >
        <Icon className="mx-[0.6rem] shrink-0 h-[24px] w-[24px] text-[#7E8986]" />
        <div className="flex items-center justify-between w-full">
          <p className="font-medium text-black">{text} </p>
          {subLinks && (
            <button
              onClick={handleCtaClick}
              className="ml-2 min-w-5 cursor-pointer"
            >
              {sublinksCollapsed ? (
                <ChevronDownIcon className="w-5 fill-black" />
              ) : (
                <ChevronUpIcon className="w-5 fill-black" />
              )}
            </button>
          )}
        </div>
      </Link>
      {!sublinksCollapsed && (
        <div className="flex flex-col space-y-2">
          {subLinks?.map(
            (subLink: { name: string; display: string; href: string }) => (
              <Link
                className={cn(
                  "flex items-center rounded-xl px-4 py-2 ml-4 cursor-pointer",
                  "text-sonic_silver-1 fill-sonic_silver-1 text-black hover:bg-[#DFEAE8]"
                )}
                href={subLink.href}
                key={subLink.name}
              >
                <p className="font-medium">{subLink.display}</p>
              </Link>
            )
          )}
        </div>
      )}
    </>
  );
}
