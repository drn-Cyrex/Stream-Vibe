import Section from '@/layouts/Section/Section'
import './MoviesBanner.scss'

const MoviesBanner = (props) => {

   const titleId = 'movies-banner-title'

   const asd = {

   } = props

   return (
      <Section
         className='movies-banner container'
         aria-labelledby={titleId}
      >
         <h1 className='visually-hidden' id={titleId}>
            Movies & Shows 
         </h1>

         
      </Section>
   )
}

export default MoviesBanner