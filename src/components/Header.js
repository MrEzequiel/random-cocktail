import React from 'react'

import logo from '../assets/logo.svg'
import randomIcon from '../assets/random.svg'

import { HeaderContainer, ButtonHeader } from './Header.style'

function Header({ randomFunction }) {
  return (
    <HeaderContainer container="940px">
      <img src={logo} alt="logo cocktail random" />

      <ButtonHeader onClick={randomFunction}>
        Random
        <img src={randomIcon} alt="random button" />
      </ButtonHeader>
    </HeaderContainer>
  )
}

export default Header
