import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  width: 256px;
  height: 310px;

  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px 36px;

  padding-top: 0;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 20px;
`

export const CoffeeItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 12px;

  span {
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 20px;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  p {
    text-align: center;
    font-size: 14px;
    color: ${({ theme }) => theme['base-label']};
    font-family: 'Roboto';
    line-height: 130%;
  }

  img {
    margin-top: -20px;
  }
`

export const CoffeeItemFlags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  span {
    font-size: 10px;
    padding: 4px 8px;
    color: ${({ theme }) => theme['yellow-900']};
    background-color: ${({ theme }) => theme['yellow-100']};
    line-height: 130%;
    text-transform: uppercase;

    border-radius: 100px;
  }
`
