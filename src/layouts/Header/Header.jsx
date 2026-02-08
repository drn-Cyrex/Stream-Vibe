import './Header.scss'
import classNames from 'classnames'
import Logo from '@/components/Logo/Logo'
import Button from '@/components/Button/Button'
import BurgerButton from '@/components/BurgerButton/BurgerButton'

const Header = (props) => {
   const {
      url,
      isFixed,
   } = props

   const menuItems = [
      {
         label: 'Home',
         href: '/'
      },
      {
         label: 'Movies & Shows',
         href: '/movies'
      },
      {
         label: 'Support',
         href: '/support'
      },
      {
         label: 'Subscriptions',
         href: '/subscriptions'
      },
   ]

   return (
      <>
         <header
            className={classNames('header', {
               'is-fixed': isFixed,
            })}>
            <Logo loading='eager' />
            <nav className='header__nav' data-js-overlay-menu-mobile=''>
               <ul>
                  {menuItems.map(({ label, href }, index) => (
                     <li key={index}>
                        <a
                           className={classNames('', {
                              'is-active': href === url
                           })}
                           href={href}>{label}</a>
                     </li>
                  ))}
               </ul>
            </nav>
            <div className='header__actions'>
               <Button
                  className='header__button'
                  label="Search"
                  isLabelHidden
                  mode='transparent'
                  iconName='search'
               />
               <Button
                  className='header__button'
                  label='Notification'
                  isLabelHidden
                  mode='transparent'
                  iconName='notification'
               />
            </div>
            <BurgerButton />
         </header >
      </>

   )
}

export default Header
