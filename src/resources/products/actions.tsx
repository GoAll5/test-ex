import axios from "axios";
import {Dispatch} from "redux";
import {ProductAction, ProductActionTypes} from "./_state";


export const fetchProducts = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS});
            const response = await axios.get('http://jsonplaceholder.typicode.com/photos',{
            });
            console.log('hello')
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data});

        } catch (e) {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'Error loading products!!!'});
        }
    }
}

export const setProductPage = (page: number): ProductAction => {
    return {type: ProductActionTypes.SET_PRODUCTS_PAGE, payload: page}
}

export const setAlbumId = (albumId: string | number): ProductAction => {
    return {type: ProductActionTypes.SET_ALBUM_ID, payload: albumId}
}

export const deleteProductById = (id: number): ProductAction => {
    return {type: ProductActionTypes.DELETE_PRODUCT_BY_ID, payload: id}
}