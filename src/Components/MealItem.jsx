import { currencyFormatting } from "../util/formatting";
import Button from "./UI/Button";
import { CartContext } from "./store/CartContext";
import { useContext } from "react";

export default function MealItem({ mealData }) {

  const { addToItems } = useContext(CartContext)
  return (
    <li className="meal-item">
      <article>
        <img
          src={`https://food-order-app-v0ra.onrender.com/${mealData.image}`}
          alt={mealData.name}
        ></img>
        <div>
          <h3>{mealData.name}</h3>
          <p className="meal-item-price">
            {currencyFormatting.format(mealData.price)}
          </p>
          <p className="meal-item-description">{mealData.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={()=>addToItems(mealData)}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}
