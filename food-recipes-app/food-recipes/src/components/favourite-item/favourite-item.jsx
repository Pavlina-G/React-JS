import './favourite-item.css';


const FavouriteItem = (props) => {
    const { id, image, title, removeFromFavourites,getRecipeUrl } = props;

    return (
        <div key={id} className="favourite-item">
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

            <button type="button" onClick={removeFromFavourites}>Remove from favourites</button>
        </div>
    )
}

export default FavouriteItem;