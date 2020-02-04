import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
	const APP_Id = "cf1b4ee8";
	const APP_Key = "4d84f047175dea8b86bc791ecaeb46c4";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken")

	useEffect(() => {
		//getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_Id}&app_key=${APP_Key}`);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	}

	const updateSearch = (e) => {
		setSearch(e.target.value);
	}

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch("");
	}

	return(
		<div className="App">
			<form 
				onSubmit={(e) => getSearch(e)}
				className="search-form">
				<input 
					className="search-bar" 
					type="text" 
					value={search} 
					onChange={(e) => updateSearch(e)}
				/>
				<button className="search-button" type="submit">Search</button>
			</form>
			{recipes.map((recipe, i) => (
				<Recipe 
					key={i}
					title={recipe.recipe.label} 
					calories={recipe.recipe.calories} 
					image={recipe.recipe.image}
				/>
			))}
		</div>
	)
}

export default App;