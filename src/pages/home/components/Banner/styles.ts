import styled from 'styled-components'

export const BannerContainer = styled.div`
  padding: 94px 0px 108px 0px;
`

export const BannerContent = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`

export const BannerInfoContent = styled.section`
  width: 588px;

  display: flex;
  flex-direction: column;
  gap: 66px;
`

export const BannerInfoOne = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  & .text-primary {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;

    color: ${({ theme }) => theme['base-title']};
  }

  & .text-secondary {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    color: ${({ theme }) => theme['base-subtitle']};
    font-stretch: 100;
  }
`

export const BannerInfoTwo = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  & div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  & .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 32px;
    height: 32px;

    border-radius: 1000px;
  }

  & .yellow-dark {
    background: ${({ theme }) => theme['yellow-900']};
  }
  & .dark {
    background: ${({ theme }) => theme['base-text']};
  }
  & .yellow {
    background: ${({ theme }) => theme['yellow-500']};
  }
  & .purple {
    background: ${({ theme }) => theme['purple-500']};
  }

  & .text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;

    color: ${({ theme }) => theme['base-text']};
  }
`
