import { Link } from "react-router-dom";

const Item = ({ item: { idDrink, strDrinkThumb, strDrink, strAlcoholic, strGlass } }) => {
  return (
    <div className="item">
      <div className="image">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="content">
        <h3>{strDrink}</h3>
        <p>{strGlass}</p>
        <p>{strAlcoholic}</p>
        <Link className="link-Button" to={`item:id${idDrink}`}>
          Details
        </Link>
      </div>
    </div>
  );
};
export default Item;
