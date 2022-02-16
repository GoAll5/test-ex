import {styles} from "./styles";
import {setProductPage} from "../../resources/products/actions";
import React from "react";
import {useDispatch} from "react-redux";
import {Pagination} from "@mui/material";

interface PropsPagesBar {
    page: number;
    countPage: number;
}

export const PagesBar = (props: PropsPagesBar) => {
    const dispatch = useDispatch()

    return (
            <Pagination
                count={props.countPage}
                page={props.page}
                onChange={(e, page) =>  dispatch(setProductPage(page))}
                sx={styles.pagesBar}
            />

    )
}

