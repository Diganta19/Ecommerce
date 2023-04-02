

const cartReducer = (state,action) => {
    if(action.type === "ADD_TO_CART"){
            let {id,amount,color,product} = action.payload;

            let cartProduct;

                cartProduct = {
                    id : id+color,
                    name:product.name,
                    amount,
                    color,
                    image:product.image[0].url,
                    price:product.price,
                    max:product.stock,

                };
       
    
    return{...state,
        cart:[...state.cart,cartProduct],
    } 
}

if(action.type === "REMOVE_ITEM"){

    let updatedCart = state.cart.filter((currElem)=>   currElem.id !== action.payload)
    return{
        ...state,
        cart:updatedCart,
    }
}

if(action.type === "CLEAR_CART"){
    return{
        ...state,
        cart:[],
    }
}

return state;
}

export default cartReducer;