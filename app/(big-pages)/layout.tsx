import { YoutubeNavbar } from "./_components/youtube-navbar"
import { YoutubeSidebar } from "./_components/youtube-sidebar";

function bigPagesLayout({children}:{children:React.ReactNode}){
   return(
      <div className="h-full flex flex-col ">
         <YoutubeNavbar/>
         <div className="h-full flex absolute">
            <YoutubeSidebar/>
            {children}
         </div>
      </div>
   )
}

export default bigPagesLayout;