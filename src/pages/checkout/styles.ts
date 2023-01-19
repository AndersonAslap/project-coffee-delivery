import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 544px;
  margin: auto;
`

export const CheckoutContent = styled.div`
  padding-top: 40px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .title {
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 18px;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  .header {
    margin-bottom: 32px;
    display: flex;
    align-items: flex-start;
    gap: 8px;

    span {
      display: block;
      font-family: 'Roboto';
      line-height: 130%;
    }

    section {
      span:first-child {
        font-size: 16px;
        color: ${({ theme }) => theme['base-subtitle']};
      }

      span:last-child {
        font-size: 14px;
        color: ${({ theme }) => theme['base-text']};
      }
    }
  }
`

export const InputComponent = styled.input`
  height: 42px;
  width: ${({ width }) => width};
  padding: 12px;

  background-color: ${({ theme }) => theme['base-input']};
  border: 1px solid #e6e5e5;
  border-radius: 4px;

  font-family: 'Roboto';
  font-size: 14px;
  line-height: 130%;

  color: ${({ theme }) => theme['base-text']};

  &:focus {
    border-color: ${({ theme }) => theme['yellow-900']};
  }
`

/**
 * Container 1
 */

export const CompletedOrder = styled.div`
  width: 640px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`

/**
 * Container 2
 */

export const FinishOrder = styled.div`
  width: 448px;
`

/**
 * block 1 - Delivery
 */

export const Delivery = styled.div`
  background-color: ${({ theme }) => theme['base-card']};
  padding: 40px;
  border-radius: 6px;
`

export const DeliveryHeader = styled.header`
  svg {
    color: ${({ theme }) => theme['yellow-900']};
  }
`

export const DeliveryContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

/**
 * block 2 - Type Payment
 */

export const Payment = styled.div`
  background-color: ${({ theme }) => theme['base-card']};
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  border-radius: 6px;
`

export const PaymentType = styled(RadioGroup.Root)`
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`

export const PaymentTypeButton = styled(RadioGroup.Item)`
  width: 178.67px;
  height: 51px;
  padding: 1rem;

  background-color: ${({ theme }) => theme['base-button']};
  border: 0;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 12px;
  font-family: 'Roboto';
  line-height: 160%;
  color: ${({ theme }) => theme['base-text']};

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme['purple-900']};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background-color: ${({ theme }) => theme['base-hover']};
    color: ${({ theme }) => theme['base-subtitle']};

    svg {
      color: ${({ theme }) => theme['purple-900']};
    }
  }

  &[data-state='checked'] {
    border: 1px solid ${({ theme }) => theme['purple-900']};
  }
`

export const PaymentHeader = styled.header`
  svg {
    color: ${({ theme }) => theme['purple-900']};
  }
`

export const PaymentContent = styled.main``

/**
 * block 3 - Finish order
 */

export const FinishOrderContainer = styled.div`
  width: 100%;
  height: 498px;

  margin-top: 15px;

  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 24px;

  background-color: ${({ theme }) => theme['base-card']};

  border-radius: 6px 44px;
`

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`

export const CartItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding-bottom: 24px;

  border-bottom: 1px solid ${({ theme }) => theme['base-button']};

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      width: 64px;
      height: 64px;
    }
  }

  h3 {
    display: block;
    height: 21px;
    background-color: pink;
  }
`

export const Sumary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13.5px;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
    }
  }
`
export const ConfirmPaymentButton = styled.button`
  width: 100%;
  height: 46px;
  text-align: center;
  background-color: ${({ theme }) => theme['yellow-500']};
  border-radius: 6px;

  border: 0;

  font-weight: bold;
  font-family: 'Roboto';
  line-height: 160%;
  font-size: 14px;
  color: ${({ theme }) => theme.white};

  cursor: pointer;
`
