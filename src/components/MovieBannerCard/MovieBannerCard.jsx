import './MovieBannerCard.scss'
import { Image } from 'minista'
import Button from '../Button/Button'

const MovieBannerCard = (props) => {

   const {
      title,
      description,
      imgSrc,
   } = props

   return (
      <div className='movies-banner-card'>
         <Image
            className='movies-banner-card__image'
            src={imgSrc}
         />
         <div className="movies-banner-card__inner">
            <div className="movies-banner-card__body">
               <h2 className='movies-banner-card__title h3'>
                  {title}
               </h2>
               <div className='movies-banner-card__description hidden-mobile'>
                  {description}
               </div>
            </div>
            <div className="movies-banner-card__footer">
               <Button
                  className='movies-banner-card__play-button'
                  iconName='play'
                  label='Play Now'
               />
               <div className="movies-banner-card__actions">
                  <Button
                     mode='black-06'
                     iconName='plus'
                     label='Add to playlist'
                     isLabelHidden
                  />
                  <Button
                     mode='black-06'
                     iconName='like'
                     label='Like'
                     isLabelHidden
                  />
                  <Button
                     mode='black-06'
                     iconName='volume'
                     label='Mute'
                     isLabelHidden
                  />
               </div>
            </div>
         </div>
      </div>
   )
}


export default MovieBannerCard