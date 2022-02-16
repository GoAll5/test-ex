import React, {useEffect, useState} from 'react';
import {ProductList} from "../../components/ProductList";
import {Container} from "@mui/material";
import {AlbumFilter} from "../../components/AlbumFilter";
import {PagesBar} from "../../components/PagesBar";
import {useDispatch, useSelector} from "react-redux";
import {GlobalState} from "../../resources/reducers";
import {selectProducts} from "../../resources/products/selectors";
import {ProductState} from "../../resources/products/_state";
import {fetchProducts} from "../../resources/products/actions";
import {Product} from "../../resources/products/_product";
import {NotFoundProducts} from "../../components/NotFoundProducts";

const Products = () => {

    const dispatch = useDispatch();
    const state: ProductState = useSelector((state: GlobalState) => selectProducts(state));

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const [products, setProducts] = useState<Product[]>(state.products);

    const [isFoundProducts, setIsFoundProducts] = useState<boolean>(false)

    const getProducts = async () => {
        setProducts(state.products.filter((product) => {
            if (state.albumId === '') return true;
            return product.albumId === state.albumId;
        }))
        if(products.length === 0 && isFoundProducts)
            setIsFoundProducts(false);
        else if (!isFoundProducts)
            setIsFoundProducts(true);
    }

    useEffect(() => {
        setProducts(state.products.filter((product) => {
            if (state.albumId === '') return true;
            return product.albumId === state.albumId;
        }));
    }, [state.albumId, state.products.length]);

    useEffect(() => {
        if(products.length === 0 && isFoundProducts)
            setIsFoundProducts(false);
        else if (!isFoundProducts)
            setIsFoundProducts(true);
    }, [products.length])
    const getCountPage = () => {
        if (state.albumId === '')
            return Math.ceil(state.products.length / state.limit)
        else
            return Math.ceil(products.length / state.limit)
    };

    return (
        <Container>
            <AlbumFilter
                albumId={state.albumId}
            />
            {isFoundProducts ?
            <PagesBar countPage={getCountPage()} page={state.page}/> :
            <NotFoundProducts albumId={state.albumId}/>
            }
            <ProductList
                albumId={state.albumId}
                page={state.page}
                products={products}
                error={state.error}
                loading={state.loading}
                limit={state.limit}
            />
        </Container>
    );
};

export default Products;