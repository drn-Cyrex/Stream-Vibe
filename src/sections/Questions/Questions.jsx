import './Questions.scss'
import Section from '@/layouts/Section/Section'
import Button from '@/components/Button/Button'
import AccordionGroup from '@/components/AccordionGroup/AccordionGroup'
import Accordion from '@/components/Accordion/Accordion'


const Questions = () => {
   const questionItems = [
      'What is StreamVibe?',
      'How much does StreamVibe cost?',
      'What content is available on StreamVibe?',
      'How can I watch StreamVibe?',
      'How do I sign up for StreamVibe?',
      'What is the StreamVibe free trial?',
      'How do I contact StreamVibe customer support?',
      'What are the StreamVibe payment methods?',
   ]

   return (
      <Section
         title="Frequently Asked Questions"
         titleId="questions-title"
         description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
         actions={<Button label="Ask a Question" href="/support" />}
      >
         <AccordionGroup columns={2}>
            {questionItems.map((question, index) => (
               <Accordion
                  title={question}
                  id={`question-${index}`}
                  name='question'
                  isOpen={index === 0}
                  key={index}
               >
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, recusandae!</p>
               </Accordion>
            ))}
         </AccordionGroup>
      </Section>

            
   )
}

export default Questions


