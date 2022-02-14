import {TextField} from "@mui/material";
import React, {ChangeEvent} from "react";
import {useDispatch} from "react-redux";
import {setAlbumId, setProductPage} from "../../resources/products/actions";

interface PropsAlbumFilter {
    albumId: string | number;
    maxAlbumId: number;
}

export const AlbumFilter = (props: PropsAlbumFilter) => {
    const dispatch = useDispatch();

    const changeAlbumId = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        {
            const album = parseInt(event.target.value);
            if(Number.isInteger(album) && album > 0 && album <= props.maxAlbumId) { // e , . - +
                dispatch(setAlbumId(album));
                dispatch(setProductPage(1));
            }
            else if(album > props.maxAlbumId) {
                dispatch(setAlbumId(props.maxAlbumId));
                dispatch(setProductPage(1));
            }
            else {
                dispatch(setAlbumId(''));
                dispatch(setProductPage(1));
            }


        }
    }
    return (
        <TextField
            type={'number'}
            style={{marginTop: 15}}
            fullWidth
            label="Album id"
            value={props.albumId}
            onChange={ (e) =>  changeAlbumId(e)}
        />
    )
}