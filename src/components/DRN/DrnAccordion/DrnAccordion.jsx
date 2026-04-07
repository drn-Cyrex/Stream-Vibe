import './DrnAccordion.scss'

const DrnAccordion = (props) => {
   const {
      title = 'details',
      id,
      name,
      isOpen,
      children,
   } = props

   return (
      <div className="details-wrapper container">

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
               role=""
            >
               {/* {children} */}
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, illo.</p>
            </div>
         </details>

      </div>

   )
}

export default DrnAccordion