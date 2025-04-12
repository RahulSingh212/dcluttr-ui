import { cn } from "@/lib/cn";
import Header from "./Header";

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
    </div>
  );
}
