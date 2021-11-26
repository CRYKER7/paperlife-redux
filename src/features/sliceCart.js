import { createSlice } from "@reduxjs/toolkit";
import { db } from '../firebase/firebaseConfig';


const initialState = {
    cartList : [],
}



 const todoSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        saveTodo: (state, actions) => {
            state.cartList = (actions.payload)
        },
        setCheck: (state, actions) => {
            /* state.cartList.map(item => {
                if (actions.payload === item.id) {
                    item.estatus = !item.estatus
                }
            }) */
            (async () => {
                const queryRef = db.collection('productos').doc(actions.payload);
                const query = await queryRef.get();
                query.data().estatus ? await queryRef.update({estatus: false}) : await queryRef.update({estatus:true})
            })()
        },
        upload: () => {

        },
        

    }
    });

    

export const { saveTodo, setCheck } = todoSlice.actions
export const consultaStock = (state) => state.cart.cartList
export default todoSlice.reducer