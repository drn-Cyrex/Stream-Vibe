import './DrnQuestions.scss'
import DrnAccordion from '../DrnAccordion/DrnAccordion'
import Section from '@/layouts/Section/Section'


const DrnQuestions = () => {
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
      >
         <DrnAccordion
            title={question}
         >
         </DrnAccordion>
      </Section>
   )
}

export default DrnQuestions