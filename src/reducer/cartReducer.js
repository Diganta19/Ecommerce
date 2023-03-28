

const cartReducer = (state,action) => {
    if(action.type === "ADD_TO_CART"){
            let {id,amount,color,products} = action.payload;

            let cartProduct;

                cartProduct = {
                    id : id+color,
                    name:products.name,
                    amount,
                    color,
                    image:products.image[0].url,
                    price:products.price,
                    max:products.stock,

                };
       
    
    return{...state,
        cart:[...state.cart,cartProduct],
    } 
}
return state;
}

export default cartReducer;
