import * as React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css";
import "./../assets/scss/responsive.scss";
import "./../assets/scss/App.scss";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";

const bgpng = require("./../assets/img/photos/900-1330-b-2-c-banner@2x.png");

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <div id="bg"></div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}
