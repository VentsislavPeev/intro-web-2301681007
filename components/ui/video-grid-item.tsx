"use client"

import { formatDuration } from "@/utils/format-duration"
import { formatTimeAgo } from "@/utils/format-time-ago"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type VideoGridItemProps = {
   id:string
   title:string
   channel:{
      id:string
      name:string
      profileUrl:string
   }
   views:number
   postedAt:Date
   duration:number
   thumbnailUrl:string
   videoUrl?: string
}

const VIEW_FORMATTER = Intl.NumberFormat(undefined, {notation:"compact"})

export function VideoGridItem({
   id,title,channel,views,postedAt,duration,thumbnailUrl,videoUrl
}:VideoGridItemProps){
   const [isVideoPlaying, setIsVideoPlaying] = useState(false)
   const videoRef = useRef<HTMLVideoElement>(null)

   useEffect(()=>{
      if(videoRef.current==null) return

      if(isVideoPlaying){
         videoRef.current.currentTime = 0
         videoRef.current.play()
      } else{
         videoRef.current.pause()
      }
   },[isVideoPlaying])

   return(
   <div className="flex flex-col gap-2" onMouseEnter={()=>setIsVideoPlaying(true)} onMouseLeave={()=>setIsVideoPlaying(false)}>
      <a href={`/watch?v=${id}`} className="relative aspect-video">
         <Image alt={title} fill src={thumbnailUrl} className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${isVideoPlaying ? "rounded-none" : "rounded-xl"}`} />
         <div className="absolute bottom-1 right-1 bg-neutral-900 text-white font-medium text-sm px-0.5 rounded">
            {formatDuration(duration)}
         </div>
         {/* <video className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${isVideoPlaying ? "opacity-100 delay-200":"opacity-0"}`} ref={videoRef} muted playsInline src={videoUrl} /> */}
         {videoUrl && (
            <Image alt="video" fill src={videoUrl} className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${isVideoPlaying ? "opacity-100 delay-200":"opacity-0"}`}/>
         )} 
         
      </a>
      <div className="flex gap-2">
         <a href={`/@${channel.id}`} className="flex-shrink-0">
            <Image height={100} width={100} alt={channel.name} className="w-10 h-10 rounded-full" src={channel.profileUrl} />
         </a>
         <div className="flex flex-col">
            <a href={`/watch/?v=${id}`} className="font-bold text-neutral-50/90">
               {title}
            </a>
            <a href={`/@${channel.id}`}className="text-neutral-400 text-sm">
               {channel.name}
            </a>
            <div className=" text-neutral-400 text-sm">
               {VIEW_FORMATTER.format(views)} Views • {formatTimeAgo(postedAt)} 
            </div>
         </div>
      </div>
   </div>

   )
}