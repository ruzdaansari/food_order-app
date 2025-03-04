import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import {CartContext} from './store/CartContext.jsx'
import { useContext } from 'react'
import {UserProgressContext} from './store/UserProgressContext.jsx'

export default function Header(){
    const {items} = useContext(CartContext);
    const { showCart } = useContext(UserProgressContext)

    const totalCartItems = items.reduce((totalNoOfItems,item) => {
        return totalNoOfItems + item.quantity
    },0)
    return (
        <header id="main-header">
            <div id="title">
            <img src={logoImg} alt='logo image'></img>
            <h1>Food Order App</h1>
            </div>
            <nav><Button textOnly onClick={()=>showCart()}>Cart ({totalCartItems})</Button></nav>
        </header>
    )
}
