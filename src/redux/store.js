import {configureStore} from "@reduxjs/toolkit"
import wishReducer from "./wish/wishSlice"
import productReducer from "./getApi/getApi"
import cartReducer from "./cart/cartSlice"
import bagsReducer from "./bagsApi/bagsApi"
import beltsReducer from "./beltApi/beltApi"


const myStore = configureStore({
    reducer: {
        wish: wishReducer,
        products: productReducer,
        cart: cartReducer,
        bags: bagsReducer,
        belts: beltsReducer
    }
})

export default myStore


