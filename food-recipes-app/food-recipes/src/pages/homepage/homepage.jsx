import React, { useState } from "react";
import Search from "../../components/search/search";
import "./homepage.css";
import RecipeItem from "../../components/recipe-item/recipe";
import { useEffect } from "react";
import FavouriteItem from "../../components/favourite-item/favourite-item";

function Homepage() {
    // loading state

    const [loadingState, setLoadingState] = useState(false);
    const API_KEY = process.env.REACT_APP_API_KEY;

    // save the result from the Api

    const [recipes, setRecipes] = useState([]);

    // favourites data state

    const [favourites, setFavourites] = useState([]);

    // search recipes

    const [searchedRecipe, setSearchedRecipe] = useState('');

    const handleSearchRecipe = (event) => {
        event.preventDefault();
        const value = event.target.value
        setSearchedRecipe(value)
    }
    // api state

    const [apiCalled, setApiCalled] = useState(false);

    const getDataFromSearchInput = (getData) => {
        setLoadingState(true);

        // calling API

        async function getRecipes() {
            const apiResp = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${getData}`
            );
            const result = await apiResp.json();
            const { results } = result;

            if (results && results.length > 0) {
                setLoadingState(false);
                setRecipes(results);
                setApiCalled(true);
            }
        }
        getRecipes();
    };

    const addToFavourites = (currentRecipeItem) => {
        let copyFavourites = [...favourites];

        const index = copyFavourites.findIndex(
            (item) => item.id === currentRecipeItem.id
        );

        if (index === -1) {
            copyFavourites.push(currentRecipeItem);
            setFavourites(copyFavourites);

            //save the favourites in local storage
            localStorage.setItem("favourites", JSON.stringify(copyFavourites));
        } else {
            alert("This recipe is already present in your favourites");
        }
    };

    const removeFromFavourites = (currentRecipeId) => {
        let copyFavourites = [...favourites];
        copyFavourites = copyFavourites.filter(item => item.id !== currentRecipeId);

        setFavourites(copyFavourites);
        localStorage.setItem('favourites', JSON.stringify(copyFavourites))

    }

    useEffect(() => {
        const getFavouritesFromLocalStorage = JSON.parse(localStorage.getItem("favourites"));

        if (getFavouritesFromLocalStorage) {
            setFavourites(getFavouritesFromLocalStorage)
        }

    }, []);

    // filter searched favourite recipes
    
    const filteredFavouriteRecipes = favourites.filter(r=>r.title.toLowerCase().includes(searchedRecipe))

    return (
        <div className="homepage">
            <Search
                getDataFromSearchInput={getDataFromSearchInput} 
                apiCalled={apiCalled}
                setApiCalled={setApiCalled}
                />

            {/* show favourites items */}

            <div className="favourites-wrapper">

                <h2 className="favourites-title">Favourites</h2>

                <div className="favourites-search">
                    <input 
                    onChange={handleSearchRecipe}
                    value={searchedRecipe}
                    type="search" name="search-favourites" placeholder="Search Favourites" id="" />
                </div>

                <div className="favourites">
                    {filteredFavouriteRecipes && filteredFavouriteRecipes.length > 0
                        ? filteredFavouriteRecipes.map((item) => (
                            <FavouriteItem
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                removeFromFavourites={() => removeFromFavourites(item.id)}
                            />
                        ))
                        : null}
                </div>
            </div>

            {/* show loading state */}

            {loadingState && (
                <div className="loading">Loading recipes! Please wait!</div>
            )}
            <div className="items">
                {recipes && recipes.length > 0
                    ? recipes.map((item) => (
                        <RecipeItem
                            addToFavourites={() => addToFavourites(item)}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                        />
                    ))
                    : null}
            </div>
        </div>
    );
}

export default Homepage;
