import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
function DropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href={"/game"}>
            <div className=" w-full rounded cursor-pointer p-2">
              <p className="text-sm tracking-wide ">Learn</p>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/news"}>
            <div className=" w-full rounded cursor-pointer p-2">
              <p className="text-sm tracking-wide ">News</p>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/tracker"}>
            <div className=" w-full rounded cursor-pointer p-2">
              <p className="text-sm tracking-wide ">Tracker</p>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/practise"}>
            <div className=" w-full rounded cursor-pointer p-2">
              <p className="text-sm tracking-wide ">Practise</p>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/calculator"}>
            <div className=" w-full rounded cursor-pointer p-2">
              <p className="text-sm tracking-wide ">Calculator</p>
            </div>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDown;
