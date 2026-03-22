import ShowBanner from "@/sections/ShowBanner/Sh0wBanner"
import MovieDetails from "@/sections/MovieDetails/MovieDetails"
import Seasons from "@/components/Seasons/Seasons"

export const metadata = {
   title: 'Show - Stranger Things',
}

export default function () {
   return (
      <>
         <ShowBanner />
         <MovieDetails seasons={<Seasons />} />
      </>
   )
}