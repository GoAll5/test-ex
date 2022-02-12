import {styles} from "./styles";
import {setProductPage} from "../../resources/products/actions";
import React from "react";
import {useDispatch} from "react-redux";

interface PropsPagesBar {
    page: number;
}

export const PagesBar = (props: PropsPagesBar) => {
    const dispatch = useDispatch()

    const pages = [1, 2, 3, 4, 5]
    return (
    <div style={styles.pagesBar}>
        {pages.map(p =>
            <div
                onClick={() => dispatch(setProductPage(p))}
                key={p}
                style={p===props.page ? styles.activePage : styles.noActivePage} >
                {p}
            </div>
        )}
    </div>
    )
}