import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cosmic-cart')) ?? []

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCartItem(state, action){
            state.push(action.payload)
        },
        deleteCartItem(state, action){
            state.filter(item => item.id != action.payload.id)
        }
    }
})

export const {addCartItem, deleteCartItem} = cartSlice.actions

export default cartSlice.reducer