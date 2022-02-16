interface NotFoundProducts {
    albumId: string | number; // undefined
}

export const NotFoundProducts = (props: NotFoundProducts) => {
    return(
        <div style={{paddingTop: '35vh'}}>
            <h2 style={{textAlign: "center", fontSize: '42px'}}>
                Products with {props.albumId} album's id not found
            </h2>
        </div>
    );
}