import { SidebarInfo, sidebarLinks } from "@/lib/sidebarLinks";
import NavlinkTile from "./NavlinkTile";
import { QuestionMarkCircleIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";

export default function SidebarSection() {
  return (
    <nav className="h-full w-full flex flex-col justify-between py-7 px-4 bg-[#DFEAE8]/40">
      <ul>
        <li className="">
          <ul role="list" className="space-y-2 p-0">
            {sidebarLinks.map((linkInfo: SidebarInfo, index: number) => (
              <NavlinkTile
                key={index}
                text={linkInfo.display}
                href={linkInfo.href}
                icon={linkInfo.icon}
                subLinks={linkInfo.subLinks}
              />
            ))}
          </ul>
        </li>
      </ul>
      <ul role="list" className="space-y-2 p-0">
        <NavlinkTile
          text={"Help"}
          href={"/help"}
          icon={QuestionMarkCircleIcon}
        />
        <NavlinkTile
          text={"Settings"}
          href={"/settings"}
          icon={Cog8ToothIcon}
        />
      </ul>
    </nav>
  );
}
