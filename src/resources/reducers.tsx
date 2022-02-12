import {combineReducers} from "redux";
import {productReducer} from "./products/productReducer";
import {ProductState} from "./products/_state";

export interface GlobalState {
    product: ProductState
}

export const rootReducer = combineReducers({
    product: productReducer
})