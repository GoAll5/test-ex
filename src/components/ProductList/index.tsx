import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {deleteProductById, fetchProducts} from "../../resources/products/actions";
import {Product} from "../../resources/products/_product";

interface PropsProductList {
    products: Product[];
    loading: boolean;
    error: null | string;
    limit : number;
    page: number;
    albumId: string | number; // undefined
}

export const ProductList = (props: PropsProductList) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    if(props.loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (props.error) {
        return <h1>{props.error}</h1>
    }

    return (
            <div id="list-items">
            {props.products
                .filter((product) =>
                { if (props.albumId === '') return true;
                    return product.albumId === props.albumId;
                })
                .slice(props.page*props.limit-props.limit, props.page*props.limit).map(product =>
                <div key={product.id}>
                    <Item {...product}
                    delete={dispatch}
                    />
                </div>
            )}
            </div>
    );

};

// interface Del {
//     del: (num:number) => void;
// }

interface PropsItem {
    delete: any;
}

const Item = (props: Product & PropsItem) => {
    return (
        <div className="item">
            <div
                style={{cursor: 'pointer'}}
                onClick={() => {console.log(props.url)}}>
                <div className="item__tittle">{props.title}</div>
                <div className="item__image">
                    <img src={props.url} alt="" className="image"/>
                </div>
            </div>

            <div
                onClick={() => {
                    props.delete(deleteProductById(props.id));
                } }
                className="item__delete">Delete</div>
        </div>
    );
};