import React from 'react'
import Cocktail from './components/Cocktail'
import Header from './components/Header'

import GlobalStyle from './GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <Cocktail />
    </>
  )
}

export default App
