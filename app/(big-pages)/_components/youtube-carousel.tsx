import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
 } from "@/components/ui/carousel"

 export const YoutubeCarousel = () => {
   return (
      <Carousel >
         <CarouselContent>
            <CarouselItem>Text1</CarouselItem>
            <CarouselItem>Text2</CarouselItem>
            <CarouselItem>Text3</CarouselItem>
         </CarouselContent>
         <CarouselPrevious />
         <CarouselNext />
      </Carousel>
   )
 }