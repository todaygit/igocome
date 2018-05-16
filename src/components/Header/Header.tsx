import * as React from "react";
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import "./Header.scss";
import "./responsive.scss";

const logo = require("./assets/img/page-1.png");

export default class Header extends React.Component<{},any> {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }
  render() {
    const { anchorEl } = this.state;
    return (
      <div className="header">
        
        <img src={logo} width="108" height="54" />
        <ul className="menu">
          <li>Contact</li>
          <li>About</li>
        </ul>
        <button className="igo hvr-forward">iGoCome for Business</button>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          className="bars"
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}