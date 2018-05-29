import * as React from "react";
import { NavLink } from "react-router-dom";

import "./Content.scss";
import "./responsive.scss";
const ruby = require("../../assets/img/me/ruby.png");
const phone = require("../../assets/img/me/phone.png");
const routes = require("../../assets/img/me/routes.png");
export default class Content extends React.Component<{}, undefined> {
  render() {
    return (
      <div className="content">
        <div style={{width:'100%',maxHeight:'360px'}}>
          <h1 className="title">SEARCH ALL ROUTES AT ONCE</h1>
          <p className="acc">Find the best deals across all Providers in one location.</p>
          <div style={{display:'flex',flexFlow:'column nowrap',justifyContent:'flex-start',alignItems:'center'}}>
            <NavLink to='/search'>
              <button className="started">Get Started</button>
            </NavLink>
            <NavLink to='/search'>
              <button className="register">Register for a free account</button>
            </NavLink>
          </div>
        </div>
        <div className="al-show">
          <div className="cont no1">
            <img src={ruby} alt="ruby" />
            <h3 className="sub">All Providers on one site</h3>
            <p className="content">All major Transport providers are listed
on iGoCome, which means no more searching across multiple sites to find your trip.</p>
          </div>
          <div className="cont no2">
            <img src={phone} alt="phone" />
            <h3 className="sub">Mobile Friendly</h3>
            <p className="content">iGoCome has been specifically designed for mobile, allowing you to find the best deals, wherever you are!</p>
          </div>
          <div className="cont no3">
            <img src={routes} alt="routes"/>
            <h3 className="sub">All routes covered</h3>
            <p className="content">Every route has been captured by iGoCome, allowing you to travel further than ever at the best possible price.</p>
          </div>
        </div>
      </div>
    )
  }
}