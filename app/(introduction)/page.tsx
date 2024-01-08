import Image from 'next/image'
import { Label } from './_components/label'
import { Button } from '@/components/ui/button'

export default function Home() {

  return (
    <div className='flex flex-col items-center space-y-16 w-full'>
      <Label text="Hello HTML"/>
      <Label className='bg-gradient-to-r from-orange-300 to-zinc-500' text="Hello CSS"/>
      <Label asButton buttonType='ghost' text="Hello JavaScript"/>
      <Label asButton text="Hello React"/>

      
    </div>
  )
}
