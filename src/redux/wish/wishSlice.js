import {createSlice} from "@reduxjs/toolkit"

const wishSlice = createSlice({
    name: "wishlist",
    initialState: {
        list: []
    },
    reducers: {
        addWish: (state, action) => {
            state.list.push(action.payload)
        },
        deleteWish: (state, action) => {
            state.list = state.list.filter((x) => x.id !== action.payload)
        },
        alldelete: (state) => {
            state.list= []
        }
    }
})

export const {addWish, deleteWish, alldelete} = wishSlice.actions;
export default wishSlice.reducer