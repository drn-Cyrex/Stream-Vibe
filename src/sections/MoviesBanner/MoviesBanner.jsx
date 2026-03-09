import './MoviesBanner.scss'
import Section from '@/layouts/Section/Section'
import Slider from '@/components/Slider/Slider'
import MovieBannerCard from '@/components/MovieBannerCard/MovieBannerCard'

const MoviesBanner = (props) => {

   const titleId = 'movies-banner-title'
   const moviesCards = [
      {
         title: 'Avengers : Endgame',
         description: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
         imgSrc: '/src/assets/images/movies-banners/1.jpg',
      },
      {
         title: 'Avengers : Endgame',
         description: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
         imgSrc: '/src/assets/images/movies-banners/1.jpg',
      },
      {
         title: 'Avengers : Endgame',
         description: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
         imgSrc: '/src/assets/images/movies-banners/1.jpg',
      },
      {
         title: 'Avengers : Endgame',
         description: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
         imgSrc: '/src/assets/images/movies-banners/1.jpg',
      },
   ]

   return (
      <Section
         className='movies-banner'
         aria-labelledby={titleId}
      >
         <h1 className='visually-hidden' id={titleId}>
            Movies & Shows
         </h1>

         <Slider
            sliderParams={{
               slidesPerView: 1,
               breakpoints: {
                  1024: {
                     allowTouchMove: false,
                  },
               }
            }}
            navigationPosition='abs-bottom'
            hasScrollbarOnMobile={false}
         >
            {moviesCards.map((movieCard, index) => (
               <MovieBannerCard {...movieCard} key={index} />
            ))}
         </Slider>
      </Section>
   )
}

export default MoviesBanner