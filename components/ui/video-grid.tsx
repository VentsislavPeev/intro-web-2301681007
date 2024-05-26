"use client";

import { useState } from "react";
import { CategoryPills } from "./category-pills";
import { VideoGridItem } from "./video-grid-item";
import { categories, videos } from "@/data/home";

export function VideoGrid() {
   const [selectedCategory, setSelectedCategory] = useState(categories[0]);
   const filteredVideos = videos.filter((video) =>
      video.categories.includes(selectedCategory)
   );

   return (
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
   );
}
