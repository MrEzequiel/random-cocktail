import styled from 'styled-components'

import backgroundDrink from '../assets/background-drink.png'

export const ContainerCocktail = styled.main`
  background: #0e0e0e;
  border: 1px solid #d6685a;

  max-width: 940px;
  display: grid;
  grid-template-columns: 7fr 9fr;
  margin: 60px auto;

  box-shadow: 0px 9px 15px rgba(0, 0, 0, 0.25);
`

export const ImageCocktail = styled.div`
  border-right: 1px solid #d6685a;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${backgroundDrink});
  background-repeat: repeat-y;

  img {
    box-shadow: 0px 8px 8px -1px rgba(0, 0, 0, 0.1);
  }
`

export const ContentCocktail = styled.div`
  padding: 20px 15px;

  & > section {
    padding: 0 15px;
  }
  & > section + section {
    border-top: 1px dashed #d6685a;
  }

  .title {
    padding-bottom: 30px;

    p {
      font-size: 1.4rem;
      color: #9c9c9c;
    }

    h1 {
      font-family: 'Petrona', serif;
      font-size: 3.6rem;
      font-weight: bold;
      margin: 5px 0 15px 0;
    }

    ul li {
      display: grid;
      align-items: center;
      justify-content: flex-start;
      grid-template-columns: 20px 1fr;
      color: #dedede;
      gap: 5px;
    }
    ul li + li {
      margin-top: 8px;
    }
  }

  .indredients {
    padding-top: 30px;
    padding-bottom: 30px;

    h2 {
      font-family: 'Petrona', serif;
      font-size: 2.4rem;
      margin-bottom: 20px;
    }

    ul li + li {
      margin-top: 5px;
    }
  }

  .instructions {
    padding-top: 30px;

    h2 {
      font-family: 'Petrona', serif;
      font-size: 2.4rem;
      margin-bottom: 20px;
    }
    p {
      line-height: 24px;
    }
  }
`
