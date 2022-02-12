import React from 'react';
import {ProductList} from "../../components/ProductList";
import {Container, Pagination, TextField, Stack, Link } from "@mui/material";
import {AlbumFilter} from "../../components/AlbumFilter";
import {PagesBar} from "../../components/PagesBar";
import {useSelector} from "react-redux";
import {GlobalState} from "../../resources/reducers";
import {selectProducts} from "../../resources/products/selectors";
import {ProductState} from "../../resources/products/_state";

const Products = () => {
    const state: ProductState = useSelector((state: GlobalState) => selectProducts(state))


    return (

        <>
            <AlbumFilter
                albumId={state.albumId}
                maxAlbumId={100}
            />
            <PagesBar page={state.page}/>
            <ProductList
                {...state}
            />
        </>


    );
};

export default Products;