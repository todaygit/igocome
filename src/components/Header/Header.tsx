import * as React from "react";
import { NavLink } from "react-router-dom";
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
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const logo = require("./assets/img/page-1.png");
const style = {
  transform: 'translateY(50px)'
};

export default class Header extends React.Component<{},any> {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      scrollY: 0,
      width: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleScroll();
  }
  handleScroll() {
    window.addEventListener('scroll',(e)=>{
      console.log(window.scrollY);
      this.setState({scrollY:window.scrollY})
    })
    this.setState({width:window.innerWidth})
    window.addEventListener('resize', (e) => {
      console.log('width', window.innerWidth);
      this.setState({width:window.innerWidth})
      if (window.innerWidth > 900) {
        this.setState({anchorEl:null});
      }
    })
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
      <div className="al-hwrap" id="header">
        <div className={"header " + (this.state.anchorEl ? 'bgop' : '')}>
          <div style={{ position: 'fixed', right: '0', top: '50%', display: 'flex', flexDirection:'column'}}>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/search'>Search</NavLink>
          </div>
          <img src={logo} width="108" height="54" />
          <ul className="menu">
            <li>Login</li>
            <li>Register</li>
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
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem onClick={this.handleClose} button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Register" />
            </ListItem>
          </div>
        </div>
      </div>
    );
  }
}