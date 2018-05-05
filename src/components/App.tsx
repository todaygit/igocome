import * as React from "react";
import "./../assets/scss/App.scss";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}
