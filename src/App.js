import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';

const App = () =>{
  const[recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState("");
  const[query, setQuery] = useState("");

  const App_ID = "eb3db378";
  const App_Key = "19ebaa5417834093e78c45950469e081";

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`)
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  }

  const onSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className="App">
      <h1>Search now for recipes!</h1>
      <form className="search-form" onSubmit={onSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        servings={recipe.recipe.yield}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}
export default App;
