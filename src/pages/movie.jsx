import MovieBanner from "@/sections/MovieBanner/MovieBanner"
import MovieDetails from "@/sections/MovieDetails/MovieDetails"

export const metadata = {
   title: 'Movie - Kantara',
}

export default function () {
   return (
      <>
         <MovieBanner />
         <MovieDetails />
      </>
   )
}
