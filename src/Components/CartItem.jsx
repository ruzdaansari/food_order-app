import { currencyFormatting } from "../util/formatting"
import Button from "./UI/Button"
export default function CartItem({onIncrease,onDecrease,...item}){
    return(
        <li key={item.id} className="cart-item">
        {item.name} - {item.quantity} x {currencyFormatting.format(item.price)}
        <p className="cart-item-actions">
            <button onClick={onDecrease}>-</button>
            <span>{item.quantity}</span>
            <button onClick={onIncrease}>+</button>
        </p>
      </li>
    )
}