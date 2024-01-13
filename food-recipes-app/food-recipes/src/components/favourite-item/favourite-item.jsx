import './favourite-item.css';


const FavouriteItem = (props) => {
    const { id, image, title } = props;

    return (
        <div key={id} className="favourite-item">
            <div style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
                {/* <img src={image} alt="recipe" /> */}
            </div>

            <p>{title}</p>

            <button type="button" >Remove from favourites</button>
        </div>
    )
}

export default FavouriteItem;