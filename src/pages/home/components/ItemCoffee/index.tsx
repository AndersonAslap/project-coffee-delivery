import {
  CoffeeItemContainer,
  CoffeeItemContent,
  CoffeeItemFlags,
} from './styles'

interface ItemCoffeeProps {
  coffee: {
    title: string
    image: string
    description: string
    price: number
    flags: string[]
  }
}

export function ItemCoffee({ coffee }: ItemCoffeeProps) {
  return (
    <CoffeeItemContainer>
      <CoffeeItemContent>
        <img src={coffee.image} alt="" />

        <CoffeeItemFlags>
          {coffee.flags.map((flag) => (
            <span key={flag}>{flag}</span>
          ))}
        </CoffeeItemFlags>

        <span>{coffee.title}</span>

        <p>{coffee.description}</p>
      </CoffeeItemContent>
    </CoffeeItemContainer>
  )
}
