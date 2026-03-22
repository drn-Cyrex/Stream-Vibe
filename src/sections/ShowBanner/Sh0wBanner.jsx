import './ShowBanner.scss'
import MovieBannerCard from '@/components/MovieBannerCard/MovieBannerCard'

const ShowBanner = () => {
   const titleId = 'show-banner-title'

   return (
      <section
         className='container'
         aria-labelledby={titleId}
      >
         <MovieBannerCard
            title='Stranger Things'
            titleId={titleId}
            TitleTag='h2'
            description='When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.'
            imgSrc='/src/assets/images/movies-banners/3.jpg'
            isSmallPaddingY
         />
      </section>
   )
}

export default ShowBanner