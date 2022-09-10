import { NavLink } from 'react-router-dom'
import {
  BadgeNotification,
  ShoppingCartCheckoutContent,
  ShoppingCartCheckoutIcon,
} from './styles'

export function ShoppingCartCheckout() {
  return (
    <NavLink to="/checkout">
      <ShoppingCartCheckoutContent>
        <ShoppingCartCheckoutIcon size={22} weight="fill" />
        {/* <BadgeNotification>1</BadgeNotification> */}
      </ShoppingCartCheckoutContent>
    </NavLink>
  )
}
