import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CheckoutContainer,
  CheckoutContent,
  CompletedOrder,
  Delivery,
  DeliveryContent,
  DeliveryHeader,
  FinishOrder,
  InputComponent,
  Payment,
  PaymentContent,
  PaymentHeader,
  PaymentType,
  PaymentTypeButton,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutContent>
        <CompletedOrder>
          <span className="title">Complete seu pedido</span>

          <div>
            <Delivery>
              <DeliveryHeader className="header">
                <MapPinLine size={22} />

                <section>
                  <span>Endereço de Entrega</span>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </section>
              </DeliveryHeader>

              <DeliveryContent>
                <InputComponent width="200px" placeholder="CEP" />

                <InputComponent width="100%" placeholder="Rua" />

                <section>
                  <InputComponent width="200px" placeholder="Número" />
                  <InputComponent width="348px" placeholder="Complemento" />
                </section>

                <section>
                  <InputComponent width="488px" placeholder="Cidade" />
                  <InputComponent width="60px" placeholder="UF" />
                </section>
              </DeliveryContent>
            </Delivery>

            <Payment>
              <PaymentHeader className="header">
                <CurrencyDollar size={22} />

                <section>
                  <span>Pagamento</span>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </section>
              </PaymentHeader>

              <PaymentContent>
                <PaymentType>
                  <PaymentTypeButton value="1">
                    <CreditCard size={18} />
                    <span>CARTÃO DE CRÉDITO</span>
                  </PaymentTypeButton>

                  <PaymentTypeButton value="2">
                    <Bank size={18} />
                    <span>CARTÃO DE DÉBITO</span>
                  </PaymentTypeButton>

                  <PaymentTypeButton value="3">
                    <Money size={18} />
                    <span>DINHEIRO</span>
                  </PaymentTypeButton>
                </PaymentType>
              </PaymentContent>
            </Payment>
          </div>
        </CompletedOrder>

        <FinishOrder>
          <span className="title">Cafés selecionados</span>
        </FinishOrder>
      </CheckoutContent>
    </CheckoutContainer>
  )
}
