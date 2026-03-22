import './Seasons.scss'
import AccordionGroup from '../AccordionGroup/AccordionGroup'
import Accordion from '../Accordion/Accordion'
import seasonItems from './seasonsItems'

const Seasons = () => {


   return (
      <AccordionGroup
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
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nihil?
            </Accordion>
         ))}
      </AccordionGroup>
   )
}

export default Seasons
