import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { ArrowUpFromLineIcon, Menu, Mic2Icon, MicIcon, YoutubeIcon } from "lucide-react";
import { YoutubeImg } from "@/public/imgs/youtube-icon";
import {YoutubeSearchIconImg} from "@/public/imgs/search-icon"
import {YoutubeNotificationBellImg} from "@/public/imgs/notification-bell-icon"
import {YoutubeProfilePicImg} from "@/public/imgs/profile-pic"
import { YoutubeCarousel } from "./youtube-carousel";

export const YoutubeNavbar = () => {
   return (
      <div className="">
         <div className="h-full px-4 py-2 flex justify-between ">
            <span className="mt-2">
               <YoutubeImg />
            </span>
            <div className="items-center hidden sm:flex">
               <input className="block py-3 px-4 w-full z-20 text-sm text-white bg-transparent rounded-l-full border-[0.5px] border-neutral-500  xl:w-[36rem] lg:w-[30rem] md:w-[20rem]  " type="text" placeholder="Search" name="" id="" />
               <div className="bg-neutral-800 border-neutral-500 border-[0.5px] border-l-0 p-2.5 px-6 rounded-r-full">
                  <YoutubeSearchIconImg/>
               </div>
               <Button variant="ghost" className=" mx-3 h-3 w-12 rounded-full hover:bg-white/20 bg-neutral-800">
                  <MicIcon color="white" />
               </Button>
            </div>
            <div>
               <div className="flex space-x-3">
                  <Button size="icon">
                     <ArrowUpFromLineIcon color="white" />
                  </Button>
                  <Button size="icon">
                     <YoutubeNotificationBellImg />
                  </Button>
                  <Button variant="none" size="icon">
                     <YoutubeProfilePicImg/>
                  </Button>
               </div>
            </div>
         </div>
         <div className="bg-white">
            {/* <YoutubeCarousel/> */}
            s
         </div>
      </div>
   );
};

{/* <Sheet>
   <SheetTrigger asChild>
      <Button className="p-2 h-auto rounded-full">
      <Menu color="white" />
      </Button>
   </SheetTrigger>
   <SheetContent side="left" className="w-64">
      <SheetHeader>
         <SheetTitle>Edit profile</SheetTitle>
         <SheetDescription>
            Make changes to your profile here. Click save when
            you're done.
         </SheetDescription>
      </SheetHeader>
      <SheetFooter>
         <SheetClose asChild>
            <Button type="submit">Save changes</Button>
         </SheetClose>
      </SheetFooter>
   </SheetContent>
</Sheet> */}