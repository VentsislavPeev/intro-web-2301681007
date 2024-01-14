"use client";

import { Button } from "@/components/ui/button";
import { YoutubeNotificationBellImg } from "@/public/imgs/notification-bell-icon";
import { YoutubeProfilePicImg } from "@/public/imgs/profile-pic";
import { YoutubeSearchIconImg } from "@/public/imgs/search-icon";
import { YoutubeImg } from "@/public/imgs/youtube-icon";
import {
   ArrowLeftIcon,
   ArrowUpFromLineIcon,
   Menu,
   MicIcon,
   Search,
} from "lucide-react";
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";

export default function PageHeader() {
   const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

   return (
      <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
         <PageHeaderFirstSection hidden={showFullWidthSearch}/>
         <form
            className={`gap-4 flex-grow justify-center ${
               showFullWidthSearch ? "flex" : "md:flex hidden"
            }`}
         >
            {showFullWidthSearch && (
               <Button
                  onClick={() => setShowFullWidthSearch(false)}
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="flex-shrink-0"
               >
                  <ArrowLeftIcon color="white" className="" />
               </Button>
            )}
            <div className="flex flex-grow max-w-[600px]">
               
               <input
                  type="search"
                  placeholder="Search"
                  className="rounded-l-full border bg-transparent border-secondary-border py-1 px-4 text-md w-full focus:border-blue-500 outline-none"
               />
               <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
                  <YoutubeSearchIconImg />
               </Button>
            </div>
            <Button size="icon" className="flex-shrink-0" type="button">
               <MicIcon color="white" />
            </Button>
         </form>
         <div
            className={`flex-shrink-0 md:gap-2 ${
               showFullWidthSearch ? "hidden" : "flex"
            }`}
         >
            <Button
               onClick={() => setShowFullWidthSearch(true)}
               size="icon"
               className="md:hidden"
            >
               <YoutubeSearchIconImg />
            </Button>
            <Button size="icon" className="md:hidden">
               <MicIcon color="white" />
            </Button>
            <Button variant="ghost" size="icon">
               <ArrowUpFromLineIcon color="white" />
            </Button>
            <Button variant="ghost" size="icon">
               <YoutubeNotificationBellImg />
            </Button>
            <Button className="w-14 hover:bg-neutral-900" variant="none" size="icon">
               <YoutubeProfilePicImg />
            </Button>
         </div>
      </div>
   );
}

type PageHeaderFirstSectionProps = {
   hidden?:boolean
}

export function PageHeaderFirstSection({hidden = false}:PageHeaderFirstSectionProps) {
   const { toggle } = useSidebarContext();

   return (
      <div
         className={`flex gap-4 items-center flex-shrink-0 ${
            hidden ? "hidden" : "flex"
         }`}
      >
         <Button onClick={toggle} variant="ghost" size="icon">
            <Menu color="white" />
         </Button>
         <YoutubeImg />
      </div>
   );
}
