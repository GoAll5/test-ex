import React from 'react';
import {useDispatch} from "react-redux";
import {deleteProductById} from "../../resources/products/actions";
import {Product} from "../../resources/products/_product";
import {Modal} from "@mui/material";

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

    if(props.loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (props.error) {
        return <h1>{props.error}</h1>
    }

    return (
            <div id="list-items">
            {props.products
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


interface PropsItem {
    delete: any;
}

const Item = (props: Product & PropsItem) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="item">
            <div
                style={{cursor: 'pointer'}}
                onClick={handleOpen}>
                <div className="item__tittle">{props.title}</div>
                <div className="item__image">
                    <img src={props.url} alt="" className="image"/>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <img
                    src={props.url}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400
                    }}/>
            </Modal>

            <div
                onClick={() => {
                    props.delete(deleteProductById(props.id));
                } }
                className="item__delete">Delete</div>
        </div>
    );
};

