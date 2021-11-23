import { TYPES } from "../Actions/shoppingActions";

export const shoppingInitialState = {
    cart: []
};

export function shoppingReducer(state, action) {    
    switch (action.type){
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(product => product.idProducto === action.payload);
            //console.log(newItem);
            let itemIncart = state.cart.find(item => item.idProducto === newItem.idProducto);
            return itemIncart
            ? {
                ...state, 
            }
            :{
                ...state, 
                cart:[...state.cart, {...newItem, quantity: 1}], 
            };
            
        }
        case TYPES.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.idProducto !== action.payload),
            }
        
        case TYPES.CLEAR_CART:
            return shoppingInitialState;
        
        default:
            return state;
    }
}
