import Image from "next/image";
import PageHeader from "../_layouts/pageheader";

export default function FirstPage(){
   return(
      <div>
         <Image className="rounded-md" width={300} height={200} alt="image" src="https://openseauserdata.com/files/7d5d665f92c09858439458678bc879a4.gif"/>
      </div>  
   )
}