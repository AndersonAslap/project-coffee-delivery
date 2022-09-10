import styled from 'styled-components'

import { ShoppingCart } from 'phosphor-react'

export const ShoppingCartCheckoutContent = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 38px;
  height: 38px;

  background: ${({ theme }) => theme['yellow-100']};
  border-radius: 6px;

  position: relative;
`

export const ShoppingCartCheckoutIcon = styled(ShoppingCart)`
  color: ${({ theme }) => theme['yellow-900']};
  position: absolute;
`

// badge incremental items
export const BadgeNotification = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 20px;
  height: 20px;
  right: -8.35px;
  top: -8px;

  background: ${({ theme }) => theme['yellow-900']};
  border-radius: 1000px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;

  text-align: center;
  letter-spacing: -0.06em;

  color: ${({ theme }) => theme.white};
`
// end badge incremental items
