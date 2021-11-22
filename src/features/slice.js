import { createSlice } from '@reduxjs/toolkit'
import { db } from '../firebase/firebaseConfig';

const initialState = {
    productos: []
}

const slice = createSlice({
    name: 'productos',
    initialState,
    reducers: {
        stock: (state, actions) => {
            state.productos = (actions.payload)
        }
    }
});

export const { stock } = slice.actions
export const consultaStock = (state) => state.productos
export default slice.reducer