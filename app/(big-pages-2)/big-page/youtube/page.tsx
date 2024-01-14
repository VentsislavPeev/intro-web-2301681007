"use client";

import { CategoryPills } from "@/components/ui/category-pills";
import PageHeader from "../_layouts/pageheader";
import { categories, videos } from "@/data/home";
import { useState } from "react";
import { VideoGridItem } from "@/components/ui/video-grid-item";
import { Sidebar } from "../_layouts/sidebar";
import { SidebarProvider } from "@/app/(big-pages-2)/big-page/contexts/SidebarContext";

export default function YoutubePage() {
   const [selectedCategory, setSelectedCategory] = useState(categories[0]);

   return (
      <SidebarProvider>
         <div className="max-h-screen flex flex-col">
            <PageHeader />
            <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
               <Sidebar />
               <div className="overflow-x-hidden pr-8 pl-5 pb-4">
                  <div className="sticky top-0 bg-neutral-900 z-10 pb-4">
                     <CategoryPills
                        selectedCategory={selectedCategory}
                        onSelect={setSelectedCategory}
                        categories={categories}
                     />
                  </div>
                  <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                     {videos.map((video) => (
                        <VideoGridItem key={video.id} {...video} />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </SidebarProvider>
   );
}
