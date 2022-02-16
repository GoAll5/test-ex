import React from 'react';
import Products from "./screens/Products";
import {Container} from "@mui/material";
import {store} from "./resources/store";
import {Provider} from "react-redux";


function App() {
  return (
      <Provider store={store}>
          <Container className={'container'}
                     maxWidth={false}

          >
            <Products/>
          </Container>
      </Provider>
  );
}

export default App;
