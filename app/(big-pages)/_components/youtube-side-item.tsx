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
                  height="27"
                  viewBox="0 0 24 24"
                  width="27"
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
                  height="27"
                  viewBox="0 0 24 24"
                  width="27"
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
                  height="27"
                  viewBox="0 0 24 24"
                  width="27"
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
                  height="27"
                  viewBox="0 0 24 24"
                  width="27"
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
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" width="27" height="27">
  <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
</svg>
            </div>
         ),
      },
      {
         label: "History",
         icon: (
            <div className="fill-current">
               <svg xmlns="http://www.w3.org/2000/svg" height="27" viewBox="0 0 24 24" width="27" focusable="false"><g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
            </div>
         ),
      },
      {
         label: "Your videos",
         icon: (
            <div className="fill-current">
               <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="27" viewBox="0 0 24 24" width="27" focusable="false"><path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path></svg>
            </div>
         ),
      },
      {
         label: "Watch later",
         icon: (
            <div className="fill-current">
               <svg xmlns="http://www.w3.org/2000/svg" height="27" viewBox="0 0 24 24" width="27" focusable="false"><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path></svg>
            </div>
         ),
      },
      {
         label: "Your clips",
         icon: (
            <div className="fill-current">
               <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="27" viewBox="0 0 24 24" width="27" focusable="false"><path d="M8 7c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-1 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3.79-7.77L21 18.44V20h-3.27l-5.76-5.76-1.27 1.27c.19.46.3.96.3 1.49 0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.42 0 .81.08 1.19.2l1.37-1.37-1.11-1.11C8 10.89 7.51 11 7 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4c0 .43-.09.84-.21 1.23zm-.71.71-.43-.44.19-.58c.11-.34.16-.64.16-.92 0-1.65-1.35-3-3-3S4 5.35 4 7s1.35 3 3 3c.36 0 .73-.07 1.09-.21l.61-.24.46.46 1.11 1.11.71.71-.71.71-1.37 1.37-.43.43-.58-.18C7.55 14.05 7.27 14 7 14c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.38-.07-.75-.22-1.12l-.25-.61.47-.47 1.27-1.27.71-.71.71.71L18.15 19H20v-.15l-9.92-9.91zM17.73 4H21v1.56l-5.52 5.52-2.41-2.41L17.73 4zm.42 1-3.67 3.67 1 1L20 5.15V5h-1.85z"></path></svg>
            </div>
         ),
      },
      {
         label: "Show more",
         icon: (
            <div className="fill-current">
               <svg xmlns="http://www.w3.org/2000/svg" height="27" viewBox="0 0 24 24" width="27" focusable="false"><path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"></path></svg>
            </div>
         ),
      },
   ];

   return (
      <>
         {expand === true ? (
            <div className="flex flex-col ml-2 ">
               {MainRoutes.map((route) => (
                  <Button
                     size="lg"
                     className={cn("text-[11pt] flex justify-start", pathname === route.href && "bg-white/10")}
                     key={route.label}
                  >
                     {route.label!=="You"?(
                        <>
                           <div className="mr-6">
                              {route.icon}
                           </div>
                           {route.label}
                        </>
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
                     <div className="mr-6">
                              {route.icon}
                           </div>
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
