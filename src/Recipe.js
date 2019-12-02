import React from 'react';

const Recipe = (props) => {
  return(
    <div className="recipe-container">
      <h1>{props.title}</h1>
      <p>Calories per serving: {(props.calories/props.servings).toFixed(0)}</p>
      <p>Servings: {props.servings}</p>
      <img src={props.image} alt=""/>
      <ul className="ingredient-list">
        {props.ingredients.map(ingredient =>(
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  )
};

export default Recipe
