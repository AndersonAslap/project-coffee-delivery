import { data } from '../../utils/db'
import { Banner } from './components/Banner'
import { ItemCoffee } from './components/ItemCoffee'
import { CoffeeGrid, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <div>
        <span>Nossos cafés</span>

        <CoffeeGrid>
          {data.map((item) => (
            <ItemCoffee key={item.title} coffee={item} />
          ))}
        </CoffeeGrid>
      </div>
    </HomeContainer>
  )
}
