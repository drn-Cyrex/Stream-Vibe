import Button from '@/components/Button/Button'
import './Hero.scss'

const Hero = () => {
   const playButtonTitle = 'Play Video'
   const titleId = 'hero-title'


   return (

      <section className='hero' aria-labelledby={titleId}>
         <div className="hero__pavo">
            <button className='hero__play-button'
               type='button'
               aria-label={playButtonTitle}
               title={playButtonTitle}
            >
               <img
                  src="/play.svg"
                  alt=""
                  height={470}
                  width={470}
               />
            </button>
         </div>

         <div className="hero__description">
            <h1 id={titleId}>The Best Streaming Experience</h1>
            <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
            <Button
               className='hero__button'
               iconName='play'
               hasFillIcon
               label='Start Watching Now'
            />
         </div>
      </section>
   )
}

export default Hero

