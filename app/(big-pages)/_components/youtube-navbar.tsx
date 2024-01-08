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
import { Menu } from "lucide-react";

export const YoutubeNavbar = () => {
   return (
      <div className="h-full py-5 px-4 flex items-center">
         <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
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
         </div>
      </div>
   );
};
