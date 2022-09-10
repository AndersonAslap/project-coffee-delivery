import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1120px;
  height: 104px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 12px;

  height: 38px;
`

export const Localization = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  height: 38px;

  background: ${({ theme }) => theme['purple-100']};
  border-radius: 6px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  color: ${({ theme }) => theme['purple-900']};
`
