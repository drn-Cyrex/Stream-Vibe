import './DrnAccordion.scss'

const DrnAccordion = (props) => {
   const {
      title = 'asd',
      id,
      name,
      isOpen,
      children,
   } = props

   return (
      <div className="details-wrapper">

         <details
            className='details'
            name={name}
            open={isOpen}
         >
            <summary>
               <span role="term" aria-details={id}></span>
               <h3>{title}</h3>
            </summary>

            <div
               className='details-content'
               id={id}
               role="defenition"
            >
               {children}
            </div>
         </details>

      </div>

   )
}

export default DrnAccordion