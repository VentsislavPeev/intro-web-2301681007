"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { playlists, subscriptions } from "@/data/sidebar";
import { cn } from "@/lib/utils";
import {
   ChevronDown,
   ChevronUp,
   Clapperboard,
   Clock,
   Divide,
   Film,
   Flame,
   FlameIcon,
   Gamepad2,
   History,
   Home,
   Library,
   Lightbulb,
   ListVideo,
   Music2,
   Newspaper,
   PlaySquare,
   Podcast,
   Radio,
   Repeat,
   Shirt,
   ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import {
   Children,
   ElementType,
   ReactComponentElement,
   ReactNode,
   useState,
} from "react";
import { useSidebarContext } from "../_contexts/SidebarContext";
import { PageHeaderFirstSection } from "./pageheader";

export function Sidebar() {
   const { isLargeOpen, isSmallOpen, close } = useSidebarContext();

   return (
      <>
         <aside
            className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4  flex-col ml-1 ${
               isLargeOpen ? "lg:hidden" : "lg:flex"
            }`}
         >
            <SmallSidebarItem Icon={Home} title="Home" url="/" />
            <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
            <SmallSidebarItem
               Icon={Clapperboard}
               title="Subscriptions"
               url="/subscriptions"
            />
            <SmallSidebarItem Icon={Library} title="You" url="/you" />
         </aside>
         {isSmallOpen && (
            <div
               onClick={close}
               className="lg:hidden fixed inset-0 z-[999] bg-neutral-900 opacity-60"
            />
         )}
         <aside
            className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${
               isLargeOpen ? "lg:flex" : "lg:hidden"
            } ${
               isSmallOpen
                  ? "flex z-[999] bg-neutral-900 max-h-screen"
                  : "hidden"
            }`}
         >
            <div className="sticky top-0 px-2 pt-2 pb-2 lg:hidden bg-neutral-900">
               <PageHeaderFirstSection />
            </div>
            <LargeSidebarSection>
               <LargeSidebarItem
                  isActive
                  IconOrImgUrl={Home}
                  title="Home"
                  url="/"
               />
               <LargeSidebarItem
                  IconOrImgUrl={Repeat}
                  title="Shorts"
                  url="/shorts"
               />
               <LargeSidebarItem
                  IconOrImgUrl={Clapperboard}
                  title="Subscriptions"
                  url="/subscriptions"
               />
            </LargeSidebarSection>
            <hr />
            <LargeSidebarSection visibleItemCount={5}>
               <LargeSidebarItem
                  IconOrImgUrl={Library}
                  title="Library"
                  url="/library"
               />
               <LargeSidebarItem
                  IconOrImgUrl={History}
                  title="History"
                  url="/history"
               />
               <LargeSidebarItem
                  IconOrImgUrl={PlaySquare}
                  title="Your Videos"
                  url="/library"
               />
               <LargeSidebarItem
                  IconOrImgUrl={Clock}
                  title="Watch Later"
                  url="/playlist?list=WL"
               />
               {playlists.map((playlist) => (
                  <LargeSidebarItem
                     key={playlist.id}
                     IconOrImgUrl={ListVideo}
                     title={playlist.name}
                     url={`/playlist?list=${playlist.id}`}
                  />
               ))}
            </LargeSidebarSection>
            <hr />
            <LargeSidebarSection visibleItemCount={3} title="Subscriptions">
               {subscriptions.map((sub) => (
                  <LargeSidebarItem
                     key={sub.id}
                     IconOrImgUrl={sub.imgUrl}
                     title={sub.channelName}
                     url={`/@${sub.channelName}`}
                  />
               ))}
            </LargeSidebarSection>
            <hr />
            <LargeSidebarSection title="Explore">
               <LargeSidebarItem
                  IconOrImgUrl={FlameIcon}
                  title="Trending"
                  url="/trending"
               />
               <LargeSidebarItem
                  IconOrImgUrl={ShoppingBag}
                  title="Shopping"
                  url="/shopping"
               />
               <LargeSidebarItem
                  IconOrImgUrl={Film}
                  title="Movies & TV"
                  url="/movies-tv"
               />
               <LargeSidebarItem
                  IconOrImgUrl={Music2}
                  title="Music"
                  url="/music"
               />
               <LargeSidebarItem
                  IconOrImgUrl={Radio}
                  title="Live"
                  url="/live"
               />
               <LargeSidebarItem
                  IconOrImgUrl={Gamepad2}
                  title="Gaming"
                  url="/gaming"
               />
               <LargeSidebarItem
                  IconOrImgUrl={Newspaper}
                  title="News"
                  url="/news"
               />
               <LargeSidebarItem
                  IconOrImgUrl={Lightbulb}
                  title="Learning"
                  url="/learning"
               />
               <LargeSidebarItem
                  IconOrImgUrl={Shirt}
                  title="Fashion & Beauty"
                  url="/fashion-beauty"
               />
               <LargeSidebarItem
                  IconOrImgUrl={Podcast}
                  title="Podcasts"
                  url="/podcasts"
               />
            </LargeSidebarSection>
         </aside>
      </>
   );
}

type SmallSidebarItemProps = {
   Icon: ElementType;
   title: string;
   url: string;
};

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
   return (
      <a
         href={url}
         className={cn(
            buttonVariants({ variant: "ghost" }),
            "py-5 pl-1 flex flex-col items-center rounded-xl gap-2"
         )}
      >
         <Icon className="w-4 h-4" />
         <div className="text-xs">{title}</div>
      </a>
   );
}

type LargeSidebarSectionProps = {
   children: ReactNode;
   title?: string;
   visibleItemCount?: number;
};

function LargeSidebarSection({
   children,
   title,
   visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
   const [isExpanded, setIsExpanded] = useState(false);
   const childrenArray = Children.toArray(children).flat();
   const showExpandButton = childrenArray.length > visibleItemCount;
   const visibleChildren = isExpanded
      ? childrenArray
      : childrenArray.slice(0, visibleItemCount);
   const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

   return (
      <div>
         {title && <div className="mt-2 mb-1 ml-4 text-lg"> {title}</div>}
         {visibleChildren}
         {showExpandButton && (
            <Button
               onClick={() => setIsExpanded((e) => !e)}
               variant="ghost"
               className="flex items-center w-full gap-4 p-3 rounded-lg"
            >
               <ButtonIcon className="w-4 h-4" />
               <div>{isExpanded ? "Show Less" : "Show More"}</div>
            </Button>
         )}
      </div>
   );
}

type LargeSidebarItemProps = {
   isActive?: boolean;
   IconOrImgUrl: ElementType | string;
   title: string;
   url: string;
};

function LargeSidebarItem({
   isActive = false,
   IconOrImgUrl,
   title,
   url,
}: LargeSidebarItemProps) {
   return (
      <a
         href={url}
         className={cn(
            buttonVariants({ variant: "ghost" }),
            "w-full flex items-center rounded-lg gap-4 p-3",
            isActive ? "font-bold bg-neutral-800 hover:bg-secondary" : undefined
         )}
      >
         {typeof IconOrImgUrl === "string" ? (
            <Image
               width={100}
               height={100}
               alt={title}
               src={IconOrImgUrl}
               className="w-6 h-6 rounded-full"
            />
         ) : (
            <IconOrImgUrl className="w-4 h-4" />
         )}

         <div className="overflow-hidden whitespace-nowrap text-ellipsis">
            {title}
         </div>
      </a>
   );
}
