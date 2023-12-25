import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./redex/CartReducer";

export default configureStore({
    reducer: {
        cart: CartReducer
    }
})