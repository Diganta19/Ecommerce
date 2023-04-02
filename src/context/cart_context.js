import { createContext, useContext, useReducer,useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalData =()=>{
  let localCartData = localStorage.getItem("maxCart");
  if(localCartData === []){
    return [];
  }else{
    console.log(localCartData);
    return JSON.parse(localCartData);
  }
}

const initialState = {
  //cart: [],
  cart: getLocalData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () =>{
    dispatch({type:"CLEAR_CART"})
  };

  useEffect(()=>{
    console.log(state.cart);
    localStorage.setItem("maxCart",JSON.stringify(state.cart))
  },[state.cart])

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };