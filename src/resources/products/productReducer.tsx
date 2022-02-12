import {ProductAction, ProductActionTypes, ProductState} from "./_state";

const initialState: ProductState = {
    products: [],
    page: 1,
    error: null,
    limit: 12,
    loading: false,
    albumId: ''
}
export const productReducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS:
            return {...state, loading: true}
        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {...state, loading: false, products: action.payload}
        case ProductActionTypes.FETCH_PRODUCTS_ERROR:
            return {...state, loading: false, error: action.payload}
        case ProductActionTypes.SET_PRODUCTS_PAGE:
            return {...state, page: action.payload}
        case ProductActionTypes.SET_ALBUM_ID:
            return {...state, albumId: action.payload}
        case ProductActionTypes.DELETE_PRODUCT_BY_ID:
            return {...state, products: state.products.filter(el => el.id !== action.payload)}
        default:
            return state
    }
}