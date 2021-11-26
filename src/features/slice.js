import { createSlice } from "@reduxjs/toolkit";
import { db } from '../firebase/firebaseConfig';


const initialState = {
    todoList : [],
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
export const consultaStock = (state) => state.todos.todoList

export default todoSlice.reducer