import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () =>{
  const App_ID = "eb3db378";
  const App_Key = "19ebaa5417834093e78c45950469e081";

  useEffect( () => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${App_ID}&app_key=${App_Key}`)
    const data = await response.json();
    console.log(data);
  };

  return(
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}
export default App;
