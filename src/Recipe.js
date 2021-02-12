import React from "react";
import "./Recipe.css";

function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className="recipe">
      <h1 className="title">{title}</h1>
      <div className="recipe-ingredients">
        <h2 className="ingredients-title">Ingredients:</h2>
        <ul className="ingredients-list">
          {ingredients.map((ingredient, i) => (
            <li className="ingredient" key={i}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="calories-container">
        <h2>Calories:</h2>
        <p>{Math.floor(calories)}</p>
      </div>
      <div className="image-container">
        <img className="recipe-image" src={image} alt={title} />
      </div>
      <div className="recipe-footer">
      </div>
    </div>
  );
}

export default Recipe;
