import * as React from "react";
import "./Content.scss";

export default class Content extends React.Component<{}, undefined> {
  render() {
    return (
      <div className="content">
        <h1 className="title">SEARCH ALL ROUTES AT ONCE</h1>
        <p className="acc">Find the best deals across all Providers in one location.</p>
        <button className="started">Get Started</button>
        <p className="exp">For the best experience, please use your mobile phone when searching the best deals.</p>
        <div className="show">
          <div className="cont no1">
            <img src="https://dummyimage.com/45" alt="ruby" className="mark"/>
            <h3 className="sub">All Providers on one site</h3>
            <p className="content">All major Transport providers are listed
on iGoCome, which means no more searching across multiple sites to find your trip.</p>
          </div>
          <div className="cont no2">
            <img src="https://dummyimage.com/45" alt="phone" className="mark"/>
            <h3 className="sub">Mobile Friendly</h3>
            <p className="content">iGoCome has been specifically designed for mobile, allowing you to find the best deals, wherever you are!</p>
          </div>
          <div className="cont no3">
            <img src="https://dummyimage.com/45" alt="routes" className="mark"/>
            <h3 className="sub">All routes covered</h3>
            <p className="content">Every route has been captured by iGoCome, allowing you to travel further than ever at the best possible price.</p>
          </div>
        </div>
      </div>
    )
  }
}