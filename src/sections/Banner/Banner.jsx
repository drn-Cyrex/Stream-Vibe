import './Banner.scss'
import Button from '@/components/Button/Button'

const Banner = () => {

   const titleId = 'banner-title'

   return (

      <section
         className='banner container'
         aria-label={titleId}
      >
         <div className='banner__inner'>
            <div className='banner__body'>
               <h2 id={titleId}>Start your free trial today</h2>
               <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
            </div>
            <Button
               className='banner__button'
               label='Start a Free Trail'
               href='/subscriptions'
            />
         </div>
      </section>
   )
}

export default Banner