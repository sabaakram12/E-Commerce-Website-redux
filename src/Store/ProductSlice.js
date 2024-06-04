import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/ApiURL";
import { STATUS } from "../utils/Status";

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },

    reducers: {
        setProducts(state, action){
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload;
        },
    },
});

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = () => {
    return async function fetchProductThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING));
        try{
            const response = await fetch(`${BASE_URL}products`);
            const data = await response.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUS.IDLE));
        } catch(error){
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}

console.log(productSlice);