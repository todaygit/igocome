import * as React from "react";
import "./Footer.scss";

export default class Footer extends React.Component<{}, undefined> {
  render() {
    return (
      <div className="footer">
        <p className="copyright">© iGoCome 2018</p>
        <ul className="menu">
          <li className="item no1">About</li>
          <li className="item no2">Contact Us</li>
          <li className="item no3">Privacy</li>
          <li className="item no4">Terms and Conditions</li>
        </ul>
      </div>
    )
  }
}