"use client";

import { CategoryPills } from "@/components/ui/category-pills";
import PageHeader from "./_layouts/pageheader";
import { categories, videos } from "@/data/home";
import { useEffect, useState } from "react";
import { VideoGridItem } from "@/components/ui/video-grid-item";
import { Sidebar } from "./_layouts/sidebar";
import { SidebarProvider } from "@/app/_contexts/SidebarContext";

export default function YoutubePage() {
   const [selectedCategory, setSelectedCategory] = useState(categories[0]);
   const filteredVideos = videos.filter((video)=>video.categories.includes(selectedCategory))

   return (
      <SidebarProvider>
         <div className="flex flex-col max-h-screen">
            <PageHeader />
            <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
               <Sidebar />
               <div className="pb-4 pl-5 pr-8 overflow-x-hidden">
                  <div className="sticky top-0 z-10 pb-4 bg-neutral-900">
                     <CategoryPills
                        selectedCategory={selectedCategory}
                        onSelect={setSelectedCategory}
                        categories={categories}
                     />
                  </div>
                  <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                     {filteredVideos.map((video) => (
                        <VideoGridItem key={video.id} {...video} />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </SidebarProvider>
   );
}
