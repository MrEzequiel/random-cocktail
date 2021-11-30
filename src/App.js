import React from 'react'
import Cocktail from './components/Cocktail'
import Header from './components/Header'

import GlobalStyle from './GlobalStyles'

function App() {
  const [random, setRandom] = React.useState(null)

  const randomCocktail = async () => {
    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    )
    const json = await data.json()

    setRandom(json.drinks[0])
  }

  if (!random) {
    randomCocktail()
  }

  return (
    <>
      <GlobalStyle />

      <Header />
      <Cocktail cocktail={random} />
    </>
  )
}

export default App
