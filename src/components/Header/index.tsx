import { HeaderContainer, HeaderNav, Localization } from './styles'

import { MapPin } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCartCheckout } from '../ShoppingCartCheckout'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="logomarca" />
      </NavLink>

      <HeaderNav>
        <Localization>
          <MapPin size={22} weight="fill" />
          Pernambuco, PE
        </Localization>
        <ShoppingCartCheckout />
      </HeaderNav>
    </HeaderContainer>
  )
}
