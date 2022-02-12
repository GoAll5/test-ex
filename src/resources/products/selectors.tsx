import {GlobalState} from "../reducers";
import {ProductState} from "./_state";


export const selectProducts = (state: GlobalState): ProductState => {
    return state.product;
};

export const selectPages = (state: GlobalState): number => {
    return state.product.page;
};

export const selectAlbumId = (state: GlobalState): string | number => {
    return state.product.albumId;
};




