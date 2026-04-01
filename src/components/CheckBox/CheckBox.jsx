import getIdFromTitle from '@/utils/getIdFromTitle'
import './CheckBox.scss'
import classNames from 'classnames'

const CheckBox = (props) => {

   const {
      className,
      id = getIdFromTitle(props.label),
      label,
      isRequired,
   } = props

   return (
      <label
         className={classNames(className, 'checkbox')}
         htmlFor={id}
      >
         <input
            className='checkbox__input'
            id={id}
            type="checkbox"
            required={isRequired}
         />

         <span className='checkbox__label'>
            {label}
         </span>
      </label>
   )
}

export default CheckBox