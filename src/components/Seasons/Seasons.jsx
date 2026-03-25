import './Seasons.scss'
import AccordionGroup from '../AccordionGroup/AccordionGroup'
import Accordion from '../Accordion/Accordion'
import seasonItems from './seasonsItems'
import EpisodeCard from '../EpisodeCard/EpisodeCard'

const Seasons = () => {


   return (
      <AccordionGroup
         className='seasons'
         mode='dark'
         isOrderedList={false}
      >
         {seasonItems.map(({ title, subtitle, episodes }, index) => (
            <Accordion
               title={title}
               subtitle={subtitle}
               titleLevelClassName='h4'
               id={`season-${index}`}
               name='seasons'
               isOpen={index === 0}
               key={index}
               isArrowButton
            >
               <ul className="seasons__list">
                  {episodes.map((episode, index) => (
                     <li className="seasons__item" key={index}>
                        <EpisodeCard {...episode} />
                     </li>
                  ))}
               </ul>
            </Accordion>
         ))}
      </AccordionGroup>
   )
}

export default Seasons
