import { Link, useParams } from "react-router-dom";
import { useMainContext } from "../context/context";
const Details = () => {
  let { state: data } = useMainContext();
  data = { ...data, hello: "hello" };
  let { id } = useParams();
  id = id.slice(3);
  const drink = data.drinks.find((e) => {
    return e.idDrink === id;
  });
  const {
    strDrinkThumb,
    strDrink,
    strCategory,
    strAlcoholic,
    strInstructions,
    strGlass,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  } = drink;
  return (
    <div className="details">
      <div className="container">
        <Link className="link-Button" to="/">
          Back Home
        </Link>
        <h3 className="title">{strDrink}</h3>
        <div className="content">
          <div className="image">
            <img src={strDrinkThumb} alt={strDrink} />
          </div>
          <div className="info">
            <p>
              <span>Name : </span> {strDrink}
            </p>
            <p>
              <span>Category :</span> {strCategory}
            </p>
            <p>
              <span>Info : </span> {strAlcoholic}
            </p>
            <p>
              <span>Glass : </span> {strGlass}
            </p>
            <p>
              <span>Instructons </span>:{strInstructions}
            </p>
            <p>
              <span>Ingredients</span> :{`${strIngredient1}, ${strIngredient2}, ${strIngredient3}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
