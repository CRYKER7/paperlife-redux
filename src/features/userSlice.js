import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        sesion: (state, actions) => {
            state.user = actions.payload
        },
        logout: (state) => {
            state.user = null
        }
    }
});

export const {sesion, logout} = userSlice.actions
export const selectUser = state => state.user.user
export default userSlice.reducer