import React from 'react'

import logo from '../assets/logo.svg'
import random from '../assets/random.svg'

import { HeaderContainer } from './Header.style'

function Header() {
  return (
    <HeaderContainer container="940px">
      <img src={logo} alt="logo cocktail random" />

      <button>
        Random
        <img src={random} alt="random button" />
      </button>
    </HeaderContainer>
  )
}

export default Header
