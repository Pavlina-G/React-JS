
import './recipe.css';

// import { Link } from "react-router-dom";


const RecipeItem = (props) => {
    const { id, image, title, addToFavourites, getRecipeUrl } = props;


    return (
        <div key={id} className="recipe-item">
            <div style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
                {/* <img src={image} alt="recipe" /> */}
            </div>

            {/* <p>{title}</p> */}

            <button className='view-button'
                role="link"
                onClick={getRecipeUrl}
            >
                {title}
            </button>

            <button type="button" onClick={addToFavourites}>Add to favourites</button>
        </div>
    )
}

export default RecipeItem;