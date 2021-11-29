import React from 'react'

import logo from '../assets/logo.svg'
import random from '../assets/random.svg'

import { HeaderContainer, ButtonHeader } from './Header.style'

function Header() {
  return (
    <HeaderContainer container="940px">
      <img src={logo} alt="logo cocktail random" />

      <ButtonHeader>
        Random
        <img src={random} alt="random button" />
      </ButtonHeader>
    </HeaderContainer>
  )
}

export default Header
