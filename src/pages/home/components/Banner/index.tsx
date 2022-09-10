import {
  BannerContainer,
  BannerContent,
  BannerInfoContent,
  BannerInfoOne,
  BannerInfoTwo,
} from './styles'

import imageGlassCoffee from '../../../../assets/banner.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerInfoContent>
          <BannerInfoOne>
            <span className="text-primary">
              Encontre o café perfeito para qualquer hora do dia
            </span>

            <span className="text-secondary">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </BannerInfoOne>

          <BannerInfoTwo>
            <div>
              <span className="icon yellow-dark">
                <ShoppingCart weight="fill" color="white" />
              </span>
              <span className="text">Compra simples e segura</span>
            </div>

            <div>
              <span className="icon dark">
                <Package weight="fill" color="white" />
              </span>
              <span className="text">Embalagem mantém o café intacto</span>
            </div>

            <div>
              <span className="icon yellow">
                <Timer weight="fill" color="white" />
              </span>
              <span className="text">Entrega rápida e rastreada</span>
            </div>

            <div>
              <span className="icon purple">
                <Coffee weight="fill" color="white" />
              </span>
              <span className="text">O café chega fresquinho até você</span>
            </div>
          </BannerInfoTwo>
        </BannerInfoContent>

        <img src={imageGlassCoffee} alt="" />
      </BannerContent>
    </BannerContainer>
  )
}
