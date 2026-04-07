import Plans from "@/sections/Plans/Plans"
import PlansComparison from "@/sections/PlansComparison/PlansComparison"


export const metadata = {
   title: 'Subscriptions',
}

export default function () {
   return (
      <>
         <Plans />
         <PlansComparison/>
      </>
   )
}