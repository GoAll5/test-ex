import React, {useEffect, useState} from 'react';
import {ProductList} from "../../components/ProductList";
import {Container} from "@mui/material";
import {AlbumFilter} from "../../components/AlbumFilter";
import {PagesBar} from "../../components/PagesBar";
import {useSelector} from "react-redux";
import {GlobalState} from "../../resources/reducers";
import {selectProducts} from "../../resources/products/selectors";
import {ProductState} from "../../resources/products/_state";

const Products = () => {
    const state: ProductState = useSelector((state: GlobalState) => selectProducts(state))

    const [products, setProducts] = useState(state.products);

    useEffect(() => {
       setProducts(state.products.filter((product) => {
                if (state.albumId === '') return true;
                   return product.albumId === state.albumId;
                }))
    }, [state.albumId])

    const getCountPage = () => {
        if (state.albumId === '')
            return Math.ceil(state.products.length / state.limit)
        else
            return Math.ceil(products.length / state.limit)
    }

    return (
        <>
            <AlbumFilter
                albumId={state.albumId}
                maxAlbumId={100}
            />
            <PagesBar
                countPage={getCountPage()}
                page={state.page}/>
            <ProductList
                albumId={state.albumId}
                page={state.page}
                products={state.products}
                error={state.error}
                loading={state.loading}
                limit={state.limit}
            />
        </>
    );
};

export default Products;