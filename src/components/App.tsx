import * as React from "react";
import { NavLink, Route } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css";
import "./../assets/scss/responsive.scss";
import "./../assets/scss/App.scss";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";
import Search from "./Search/Search";

const bgpng = require("./../assets/img/photos/900-1330-b-2-c-banner@2x.png");

export interface AppProps {
}

let Bg = () => (<div id="bg"></div>)

export default class App extends React.Component<AppProps, undefined> {
    activeStyle = {
        color: "green",
        fontSize: "2rem"
    }
    render() {
        return (
            <div className="app">            
                <Header/>
                <Route exact path='/search' component={Bg}/>
                <Route exact path='/search' component={Content}/>
                <Route exact path='/' component={Search}/>
                <Footer />
            </div>
        );
    }
}
