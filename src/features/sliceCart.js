import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: localStorage.getItem('cart')
}

 const todoSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTo: ( state, actions ) => {
            state.cartList = actions.payload
            console.log(state)
            /*
          let data = JSON.parse(localStorage.getItem('cart'));
          let nuevo = {
              'idProducto': state.idProducto, 'subId': state.subId,
              'categoria': state.categoria, 'nombre': state.nombre,
              'precio': state.precio,
          }
          if(!data.includes(state.idProducto)){
              data.push(nuevo);
              localStorage.setItem('cart', JSON.stringify(data)) 
          }
          */
        },
        upload: () => {

        },
        clearCart: () => {
            localStorage.clear()
            //console.log("hi")
        }
        

    }
    });

    

export const { addTo, clearCart} = todoSlice.actions
export const consultaCart = (state) => state.cart.cartList
export default todoSlice.reducer