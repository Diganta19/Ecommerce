import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer/cartReducer";

const cartContext = createContext();
const initialState = {
    cart :[],
    total_item:"",
    total_amount:"",
    shipping_fee:5000,
};
const CartProvider  =({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState);

    const addTodCart = (id,amount,color,products)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,amount,color,products}})
    };

    return <cartContext.Provider value={{...state,addTodCart}}>{children}</cartContext.Provider>
};

const useCartContext = ()=>{
    return useContext(cartContext);
}

export {CartProvider,useCartContext}