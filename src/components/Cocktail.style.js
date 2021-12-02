import styled from 'styled-components'

import backgroundDrink from '../assets/background-drink.png'

export const TitleSection = styled.h2`
  font-family: 'Petrona', serif;
  font-size: ${props => props.fontSize};
  margin-bottom: 15px;
`

TitleSection.defaultProps = {
  fontSize: '2.4rem'
}

export const ContainerCocktail = styled.main`
  background: #0e0e0e;
  border: 1px solid #d6685a;

  max-width: 940px;
  display: grid;
  grid-template-columns: 7fr 9fr;
  margin: 60px auto;

  @media (max-width: 980px) {
    margin: 30px 20px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  box-shadow: 0px 9px 15px rgba(0, 0, 0, 0.25);

  @keyframes show-right {
    from {
      opacity: 0;
      transform: translate3d(-35px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  animation: show-right 500ms forwards ease-in-out;
`

export const ImageCocktail = styled.div`
  border-right: 1px solid #d6685a;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${backgroundDrink});
  background-repeat: repeat-y;

  @media (max-width: 700px) {
    border-right: none;
    border-bottom: 1px solid #d6685a;

    img {
      height: 350px;
    }
  }

  img {
    box-shadow: 0px 8px 8px -1px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
`

export const ContentCocktail = styled.div`
  padding: 20px 15px;

  & > section {
    padding: 0 15px;
  }

  & > section:nth-child(1) {
    animation: show-right 800ms forwards ease-in-out;
  }
  & > section:nth-child(2) {
    animation: show-right 900ms forwards ease-in-out;
  }
  & > section:nth-child(3) {
    animation: show-right 1s forwards ease-in-out;
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

  .ingredients {
    padding-top: 30px;
    padding-bottom: 30px;

    ul li + li {
      margin-top: 5px;
    }
  }

  .instructions {
    padding-top: 30px;

    p {
      line-height: 24px;
    }
  }
`
