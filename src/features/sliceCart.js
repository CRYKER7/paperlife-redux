import { createSlice } from "@reduxjs/toolkit";
//import { db } from '../firebase/firebaseConfig';


const initialState = {
    cartList : [],
}

 const todoSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTo: (state, actions) => {
            let data = JSON.parse(localStorage.getItem('cart'));
            let nuevo = {
                
            }
            data.push(nuevo);

            state.cartList = (actions.payload)

        },
        upload: () => {

        },
        

    }
    });

    

export const { addTo, setCheck } = todoSlice.actions
export const consultaStock = (state) => state.cart.cartList
export default todoSlice.reducer