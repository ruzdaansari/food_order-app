import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext({
    items:[],
    addToItems:(item)=>{},
    removeItems:(id)=>{},
    clearItems:()=>{}
})

const cartReducer = (state,action)=>{

    if(action.type === "ADD_ITEMS"){
        const exisitingItemIndex = state.items.findIndex((item)=>item.id === action.item.id);

        const updatedItems = [...state.items]
        if(exisitingItemIndex > -1){
            const updatedExisitingItem = state.items[exisitingItemIndex];
            const updatedItem = {
                ...updatedExisitingItem,
                quantity: updatedExisitingItem.quantity + 1
            }

            updatedItems[exisitingItemIndex] = updatedItem
        }else{
           updatedItems.push({
            ...action.item,
            quantity : 1 
           })
        }

        return {...state, items:updatedItems}
    }else if(action.type === "REMOVE_ITEMS"){

        const exisitingItemIndex = state.items.findIndex((item)=>{ 
            return item.id === action.id
        });

        const updatedItems = [...state.items];
        const exisitingItem = state.items[exisitingItemIndex];

        if(exisitingItem.quantity === 1){
            updatedItems.splice(exisitingItemIndex,1);

        }else{
            const updatedItem = {
                ...exisitingItem,
                quantity:exisitingItem.quantity - 1
            }
            updatedItems[exisitingItemIndex] = updatedItem;
        }
        return {...state, items:updatedItems}
    }else if(action.type === "CLEAR_ITEMS"){
        return {...state,items:[]}
    }


}
export const CartContextProvider = ({children})=>{

    const [cart, dispatchAction] = useReducer( cartReducer , {items:[]})


    const addToItems = (item) =>{
        dispatchAction({
            type :"ADD_ITEMS",
            item
        })
    }

    const removeItems = (id) =>{
        dispatchAction({
            type :"REMOVE_ITEMS",
            id
        })
    }

    const clearItems = ()=>{
        dispatchAction({
            type :"CLEAR_ITEMS"
        })
    }

    const ctxValue = {
        items:cart.items,
        addToItems,
        removeItems,
        clearItems
    }

    // console.log(ctxValue,"ctx valueee");
    

    return (
        <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
    )
}




export default CartContext;

