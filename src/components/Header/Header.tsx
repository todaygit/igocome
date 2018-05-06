import * as React from "react";
import "./Header.scss";
import "./responsive.scss";

const logo = require("./assets/img/page-1.png");

export default class Header extends React.Component<{}, undefined> {
  render() {
    return (
      <div className="header">
        <img src={logo} width="108" height="54" />
        <ul className="menu">
          <li>Contact</li>
          <li>About</li>
        </ul>
        <button className="igo">iGoCome for Business</button>
      </div>
    );
  }
}