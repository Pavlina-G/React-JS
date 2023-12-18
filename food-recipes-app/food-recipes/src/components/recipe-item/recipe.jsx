
import './recipe.css';


const RecipeItem = (props) => {
    const { id, image, title } = props;

    return (
        <div key={id} className="recipe-item">
            <div style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
                {/* <img src={image} alt="recipe" /> */}
            </div>
            <p>{title}</p>
            <button>Add to favourites</button>
        </div>
    )
}

export default RecipeItem;