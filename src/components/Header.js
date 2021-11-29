import React from 'react'

import logo from '../assets/logo.svg'
import random from '../assets/random.svg'

function Header() {
  return (
    <header>
      <img src={logo} alt="logo cocktail random" />

      <button>
        Random
        <img src={random} alt="random button" />
      </button>
    </header>
  )
}

export default Header
