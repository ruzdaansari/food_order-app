import { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "./store/CartContext.jsx";
import UserProgressContext from "./store/UserProgressContext.jsx";
import { currencyFormatting } from "../util/formatting";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import { useActionState } from "react";
import useHttp from "../hooks/useHttp.js";
import Error from "./UI/Error.jsx";

const requestCOnfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
export default function Checkout({}) {
  const { items ,clearItems} = useContext(CartContext);
  const { progress, hideCheckoutCart } = useContext(UserProgressContext);
  const totalAmount = items.reduce(
    (totalAmount, item) => totalAmount + item.quantity * item.price,
    0
  );

  const {
    data,
    // isLoading: isSending,
    error,
    sendRequest,
    clearRequest
  } = useHttp(`https://food-order-app-v0ra.onrender.com/orders`, requestCOnfig);

  async function submitAction(prevFormState, formData) {
    const customerData = {
      email: formData.get("email"),
      name: formData.get("name"),
      street: formData.get("street"),
      "postal-code": formData.get("postal-code"),
      city: formData.get("city"),
    };

    // fetch(`https://food-order-app-v0ra.onrender.com/orders`,{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify({
    //     order:{
    //       items,
    //       customer:customerData
    //     }
    //   })
    // })

    await sendRequest(
      JSON.stringify({
        order: {
          items,
          customer: customerData,
        },
      })
    );
  }

  const [formState, formAction, isSending] = useActionState(submitAction, null );

  let action = (
    <>
      <Button type="button" textOnly onClick={hideCheckoutCart}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    action = <span>sending order details...</span>;
  }

  const handleFinish = ()=>{
    hideCheckoutCart();
    clearRequest();
    clearItems();

  }

  if(data && !error){
    return <Modal  open={progress === "checkout"}
    onClose={progress === "checkout" ? hideCheckoutCart : null}>
      <h2>Success</h2>
      <p>Your order has been successfully place</p>
      <p>we will back to you within a second via registered email</p>
      <Button onClick={handleFinish}>Okay</Button>
    </Modal>
  }

  return (
    <Modal
      open={progress === "checkout"}
      onClose={progress === "checkout" ? hideCheckoutCart : null}
    >
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount {currencyFormatting.format(totalAmount)}</p>

        <Input label="Full Name" type="text" id={"name"} />
        <Input label="E-Mail Address" type="email" id={"email"} />
        <Input label="Street" type="text" id={"street"} />
        <div className="control-row">
          <Input label="Postal Code" type="text" id={"postal-code"} />
          <Input label="City" type="text" id={"city"} />
        </div>

        {error && <Error title={"Failed to placed the order"} message={error}/>}
        <p className="modal-actions">{action}</p>
      </form>
    </Modal>
  );
}
