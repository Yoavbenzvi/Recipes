import React from 'react';
import style from './Recipe.module.css';

const Recipe = ({ title, calories, image, ingredients, fullRecipe }) => {
	return(
		<div className={style.recipe}>
			<h1>{title}</h1>
			<ol>
				{ingredients.map(ing => (
					<li>{ing.text}</li>
				))}
			</ol>
			<p>{Math.floor(calories)} calories</p>
			<a href={fullRecipe}><p>Full recipe</p></a> 
			<img src={image} alt="example" />
		</div>
	)
}

export default Recipe;