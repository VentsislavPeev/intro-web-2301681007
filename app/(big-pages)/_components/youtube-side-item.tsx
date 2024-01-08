"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter} from "next/navigation";
import { cn } from "@/lib/utils";

interface SideItemProps {
   expand?: boolean;
}

export const SideItem = ({ expand = false }: SideItemProps) => {
   const router = useRouter();
   const pathname = usePathname();

   const MainRoutes = [
      {
         label: "Home",
         icon: (
            <div className="fill-current">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
               >
                  <g>
                     <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
                  </g>
               </svg>
            </div>
         ),
         href:"/youtube",
      },
      {
         label: "Shorts",
         icon: (
            <div className="fill-current">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
               >
                  <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
               </svg>
            </div>
         ),
         href:"/youtube/shorts",
      },
      {
         label: "Subscriptions",
         icon: (
            <div className="fill-current">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
               >
                  <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
               </svg>
            </div>
         ),
         href:"/youtube/subscriptions",
      },
      {
         label: "You",
         icon: (
            <div className="fill-current">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"   
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
               >
                  <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
               </svg>
            </div>
         ),
         href:"/youtube/you",
      },
   ];
   const SecondaryRoutes = [
      {
         label: "Your channel",
         icon: (
            <div className="fill-current">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" width="24" height="24">
  <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
</svg>
            </div>
         ),
      },
      {
         label: "History",
         icon: (
            <div className="fill-current">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
               >
                  <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
               </svg>
            </div>
         ),
      },
      {
         label: "Your videos",
         icon: (
            <div className="fill-current">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
               >
                  <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
               </svg>
            </div>
         ),
      },
      {
         label: "Watch later",
         icon: (
            <div className="fill-current">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
               >
                  <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
               </svg>
            </div>
         ),
      },
      {
         label: "Your clips",
         icon: (
            <div className="fill-current">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
               >
                  <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
               </svg>
            </div>
         ),
      },
      {
         label: "Show more",
         icon: (
            <div className="fill-current">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
               >
                  <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
               </svg>
            </div>
         ),
      },
   ];

   return (
      <>
         {expand === true ? (
            <div className="flex flex-col">
               {MainRoutes.map((route) => (
                  <Button
                     size="lg"
                     className={cn("text-[11pt] flex flex-row justify-start", pathname === route.href && "bg-white/10")}
                     key={route.label}
                  >
                     {route.label!=="You"?(
                        <div>
                           {route.icon}
                           {route.label}
                        </div>
                     ):(

                        <h1 className="text-[13pt]">
                           {route.label} >
                        </h1>
                     )}
                     
                  </Button>
               ))}
               {SecondaryRoutes.map((route) => (
                  <Button
                     size="lg"
                     className="text-[11pt] flex justify-start"
                     key={route.label}
                  >
                     {route.icon}
                     {route.label}
                  </Button>
               ))}
            </div>
         ) : (
            <>
               {MainRoutes.map((route) => (
                  <Button
                     className="text-[11px] flex flex-col"
                     key={route.label}
                  >
                     {route.icon}
                     {route.label}
                  </Button>
               ))}
            </>
         )}
      </>
   );
};
