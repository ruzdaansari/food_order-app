import { createContext, useState } from "react";

export const UserProgressContext = createContext({
    progress:"",
    showCart:()=>{},
    hideCart:()=>{},
    showCheckoutCart:()=>{},
    hideCheckoutCart:()=>{}
})

export function UserProgressContextProvider({children}){

    const [userProgress,setUserProgress] = useState("");

    const showCart = ()=>{
        // console.log("show cart");
        
        setUserProgress("cart")
    }

    const hideCart = ()=>{
        // console.log("hide cart");

        setUserProgress("")
    }

    const showCheckoutCart = ()=>{
        // console.log("show checkout");

        setUserProgress("checkout")
    }

    const hideCheckoutCart = () => {
        // console.log("hide checkout");
    
        setUserProgress(""); 
    };
    const ctxUserProgress = {
        progress:userProgress,
        showCart,
        hideCart,
        showCheckoutCart,
        hideCheckoutCart
    }

    // console.log(ctxUserProgress.progress,"progressssss");
    
    return (
        <UserProgressContext.Provider value={ctxUserProgress}>
            {children}
        </UserProgressContext.Provider>
    )

}

export default UserProgressContext;