import './Main.scss'
import classNames from 'classnames'

const Main = (props) => {
   const {
      children,
      isResetPaddingTop = false
   } = props

   return (
      <main className={classNames('main', {
         'content--reset-padding-top': isResetPaddingTop,
      })}>
         {children}
      </main>
   )


}

export default Main