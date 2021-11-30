import React from 'react'

import categoryIcon from '../assets/category-icon.svg'
import alcoholicIicon from '../assets/alcoholic-icon.svg'
import glassIcon from '../assets/glass-icon.svg'

import {
  ContainerCocktail,
  ImageCocktail,
  ContentCocktail
} from './Cocktail.style'

function Cocktail({ cocktail }) {
  console.log(cocktail)

  const setIngredients = () => {
    const cocktailArray = Object.entries(cocktail)

    const listIngredients = cocktailArray
      .filter(
        ingredient =>
          ingredient[0].includes('strIngredient') &&
          ingredient[1] &&
          ingredient[1].trim()
      )
      .map(ingredient => ingredient[1])

    const listMeasure = cocktailArray
      .filter(
        measure =>
          measure[0].includes('strMeasure') && measure[1] && measure[1].trim()
      )
      .map(measure => measure[1])

    return listIngredients.map((ingredient, index) => {
      const measure = listMeasure[index]
      if (measure) {
        return (
          <li key={ingredient}>
            {ingredient}
            {': '} <strong>{measure}</strong>
          </li>
        )
      }
      return <li key={ingredient}>{ingredient}</li>
    })
  }

  if (cocktail) {
    return (
      <ContainerCocktail>
        <ImageCocktail>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </ImageCocktail>

        <ContentCocktail>
          <section className="title">
            <p>id: {cocktail.idDrink}</p>
            <h1>{cocktail.strDrink}</h1>

            <ul>
              <li>
                <img src={categoryIcon} alt="category icon" />
                {cocktail.strCategory}
              </li>
              <li>
                <img src={alcoholicIicon} alt="Alcoholic icon" />
                {cocktail.strAlcoholic}
              </li>
              <li>
                <img src={glassIcon} alt="glass icon" />
                {cocktail.strGlass}
              </li>
            </ul>
          </section>

          <section className="indredients">
            <h2>Indredients:</h2>
            <ul>{setIngredients()}</ul>
          </section>

          <section className="instructions">
            <h2>Instructions:</h2>
            <p>{cocktail.strInstructions}</p>
          </section>
        </ContentCocktail>
      </ContainerCocktail>
    )
  } else {
    return null
  }
}

export default Cocktail
