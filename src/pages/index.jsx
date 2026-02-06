import Hero from "@/sections/Hero/Hero"
import Categories from "@/sections/Categories/Categories"
import Devices from "@/sections/Devices/Devices"
import Questions from "@/sections/Questions/Questions"
import Plans from "@/sections/Plans/Plans"


export const metadata = {
   title: 'Home',
   isHeaderFixed: true,
}

export default function () {

   return (
      <>
         <Hero />
         <Categories />
         <Devices />
         <Questions />
         <Plans />
      </>
   )
}