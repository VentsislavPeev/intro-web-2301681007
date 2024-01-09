import { YoutubeNavbar } from "./_components/youtube-navbar";
import { YoutubeSidebar } from "./_components/youtube-sidebar";

function bigPagesLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className="flex w-screen">
         <YoutubeSidebar/>
         <div className="h-full w-full flex flex-col">
            <YoutubeNavbar />
            <div className="h-full flex">{children}</div>
         </div>
      </div>
   );
}

export default bigPagesLayout;
