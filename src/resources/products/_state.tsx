import {Product} from "./_product";

export interface ProductState {
    products: Product[];
    loading: boolean;
    error: null | string;
    limit : number;
    page: number;
    albumId: string | number; // undefined
}
// https://stackoverflow.com/questions/37427508/react-changing-an-uncontrolled-input

export enum ProductActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
    SET_PRODUCTS_PAGE = 'SET_PRODUCTS_PAGE',
    SET_ALBUM_ID = 'SET_ALBUM_ID',
    DELETE_PRODUCT_BY_ID = 'DELETE_PRODUCT_BY_ID'
}

interface FetchProductAction {
    type: ProductActionTypes.FETCH_PRODUCTS;
}

interface FetchProductSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: Product[];
}
interface FetchProductErrorAction {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
    payload: string;
}
interface SetProductPageAction {
    type: ProductActionTypes.SET_PRODUCTS_PAGE;
    payload: number;
}

interface SetAlbumIdAction {
    type: ProductActionTypes.SET_ALBUM_ID;
    payload: string | number;
}

interface DeleteProductByIdAction {
    type: ProductActionTypes.DELETE_PRODUCT_BY_ID;
    payload: number;
}


export type ProductAction = FetchProductAction
    | FetchProductSuccessAction
    | FetchProductErrorAction
    | SetProductPageAction
    | SetAlbumIdAction
    | DeleteProductByIdAction
