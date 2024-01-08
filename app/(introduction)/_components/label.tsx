"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LabelProps {
  text?: string;
  subtext?: boolean;
  asButton?:boolean;
  buttonType?:"default"|"ghost"|"destructive"|"outline"|"secondary";
  onClick?:any
  className?: string;

}

   
export const Label = ({text, subtext, asButton, buttonType = "default", className, onClick} : LabelProps) =>{
   return(
      <div className={cn("text-5xl bg-neutral-100 py-[60px] w-full flex justify-center",className)}>
         {asButton ? (
            <Button onClick={onClick} variant={buttonType} size="label">{text}</Button>
         ):(
            <>
            <h1>{text}</h1>
            <p>{subtext}</p>
            </>
         )}
      </div>
   )
}