import * as React from "react";
import {render} from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {AppContainer} from "react-hot-loader";
import App from "./components/App";

import { createStore } from 'redux'
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers);

const rootEl = document.getElementById("root");

render(
    <Provider store={store}>
        <AppContainer>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AppContainer>
    </Provider>,
    rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./components/App", () => {
        const NewApp = require("./components/App").default;

        render(
            <AppContainer>
                <NewApp/>
            </AppContainer>,
            rootEl
        );
    });
}
