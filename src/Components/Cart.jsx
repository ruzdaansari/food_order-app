import Modal from "./UI/Modal";
import CartContext from "./store/CartContext";
import { useContext } from "react";
import { currencyFormatting } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import UserProgressContext from "./store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";
export default function Cart() {
  const { items, addToItems, removeItems } = useContext(CartContext);
  const { progress, hideCart ,showCheckoutCart } = useContext(UserProgressContext);

  const totalPrice = items.reduce(
    (totalItemPrice, item) => totalItemPrice + item.quantity * item.price,
    0
  );
  return (
    <Modal open={progress==="cart"} onClose={progress==="cart" ? hideCart : null}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item, i) => (
          <CartItem
            key={item.id}
            {...item}
            onIncrease={() => addToItems(item)}
            onDecrease={() => removeItems(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatting.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCart}>
          Close
        </Button>
        {items.length > 0 && <Button onClick={showCheckoutCart}>GO to Checkout</Button>}
      </p>
    </Modal>
  );
}
