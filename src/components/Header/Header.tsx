import * as React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import "./Header.scss";
import "./responsive.scss";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

const logo = require("./assets/img/page-1.png");
const style = {
  transform: 'translateY(50px)'
};

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
    if (this.state.anchorEl) {
      this.setState({ anchorEl: null });
    } else {
      this.setState({ anchorEl: event.currentTarget });
    }
  }

  handleClose() {
    setTimeout(() => {
      this.setState({ anchorEl: null });
    }, 350);
  }
  render() {
    const { anchorEl } = this.state;
    return (
      <div className={"header " + (this.state.anchorEl ? 'bgop' : '')} id="header">
        
        <img src={logo} width="108" height="54" />
        <ul className="menu">
          <li>Contact</li>
          <li>About</li>
        </ul>
        <button className="igo">iGoCome for Business</button>
        <button
          onClick={this.handleClick}
          className="bars"
        >
          <i className={"fa "+(this.state.anchorEl ? 'fa-close' : 'fa-bars')} aria-hidden="true"></i>
        </button>
        <div
          id="simple-menu"
          style={{width : '100%', transition:'0.5s'}}
          className={(this.state.anchorEl ? 'show' : 'hide')}
        >
          <ListItem onClick={this.handleClose} button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem onClick={this.handleClose} button>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
          <ListItem onClick={this.handleClose} button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Send mail" />
          </ListItem>
          <ListItem onClick={this.handleClose} button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </div>
      </div>
    );
  }
}