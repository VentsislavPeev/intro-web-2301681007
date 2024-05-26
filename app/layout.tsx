import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "./_contexts/SidebarContext";
import { Sidebar } from "./_layouts/sidebar";
import PageHeader from "./_layouts/pageheader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Not Youtube",
   description: "Nothing works",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en" className="p-0 m-0">
         <SidebarProvider>
            <body
               className={cn(
                  inter.className,
                  "m-0 p-0 bg-neutral-900 text-white"
               )}
            >
               <div className="flex flex-col max-h-screen">
                  <PageHeader />
                  <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
                     <Sidebar />
                     {children}
                  </div>
               </div>
            </body>
         </SidebarProvider>
      </html>
   );
}
