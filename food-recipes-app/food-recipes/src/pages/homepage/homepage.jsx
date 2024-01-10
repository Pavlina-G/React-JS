import React, { useState } from 'react'
import Search from '../../components/search/search';
import './homepage.css';
import RecipeItem from '../../components/recipe-item/recipe';



function Homepage() {
    // loading state

    const [loadingState, setLoadingState] = useState(false);
    const API_KEY = process.env.REACT_APP_API_KEY

    // save the result from the Api

    const [recipes, setRecipes] = useState([]);

    // favourites data state

    const [favourites, setFavourites] = useState([]);

    const getDataFromSearchInput = (getData) => {
        setLoadingState(true);

        // calling API

        async function getRecipes() {

            const apiResp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${getData}`)
            const result = await apiResp.json();
            const { results } = result;

            if (results && results.length > 0) {
                setLoadingState(false)
                setRecipes(results);
            }
        }
        getRecipes();
    }

    const addToFavourites = (currentRecipeItem) => {

        let copyFavourites = [...favourites];

        const index = copyFavourites.findIndex(item=>item.id===currentRecipeItem.id);

        if (index === -1) {
            copyFavourites.push(currentRecipeItem);
            setFavourites(copyFavourites);
            
            //save the favourites in local storage
            localStorage.setItem('favourites', JSON.stringify(copyFavourites))
        } else {
            alert('This recipe is already present in your favourites')
        }
    }

    return (
        <div className='homepage'>
            <Search getDataFromSearchInput={getDataFromSearchInput} />

            {
                loadingState && (<div className='loading'>Loading recipes! Please wait!</div>)
            }
            <div className='items'>
                {
                    recipes && recipes.length > 0
                        ? recipes.map((item) => (
                            <RecipeItem
                                addToFavourites={() => addToFavourites(item)}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                            />
                        ))
                        : null
                }
            </div>

        </div>
    )
}

export default Homepage;