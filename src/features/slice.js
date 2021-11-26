import { createSlice } from "@reduxjs/toolkit";
import { db } from '../firebase/firebaseConfig';


const initialState = {
    todoList : [],
    cartList: []
}



 const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, actions) => {
            state.todoList = (actions.payload)
        },
        setCheck: (state, actions) => {
            /* state.todoList.map(item => {
                if (actions.payload === item.id) {
                    item.estatus = !item.estatus
                }
            }) */
            (async () => {
                const queryRef = db.collection('productos').orderBy('categoria').doc(actions.payload);
                const query = await queryRef.get();
                query.data().estatus ? await queryRef.update({estatus: false}) : await queryRef.update({estatus:true})
            })()
        },
        upload: () => {

        },
        

    }
    });

    const todoCart = createSlice ({
        name: 'cart',
        initialState,
        reducers: {
            addTo: (state, actions) => {
                state.cartList = (actions.payload)
                //localStorage.setItem("cart", JSON.stringify(actions.payload))
            }
        }
    })

export const { saveTodo, setCheck } = todoSlice.actions
export const consultaStock = (state) => state.todos.todoList

export const { addTo } = todoCart.actions
export const consultaCart = (state) => state.cart.cartList

export default todoSlice.reducer