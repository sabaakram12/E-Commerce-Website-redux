import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import categoryReducer from "./CategorySlice";
import modalReducer from "./ModalSlice";
import cartReducer from "./CartSlice";

const Store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    modal: modalReducer,
    cart: cartReducer
  }
});

export default Store;

