import * as React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./Search.scss";
var returnpng = require("./return.png");

export default class Search extends React.Component<{},any> {
  constructor(props) {
    super(props);
    this.state = {
      mode: "oneway"
    }
  }
  handleChange_one = () => this.setState({mode: "oneway"})
  handleChange_return = () => this.setState({mode: "return"})
  handleChange_multi = () => this.setState({mode: "multi"})
  render() {
    return (
      <div className="al-container">
        <div className="al-card">
          <h2>Select your Search Criteria</h2>
          <div className="al-mode">
            <Button variant="raised" color="primary" className={this.state.mode === 'oneway' ? 'active' : ''} onClick={this.handleChange_one}>
              ONE WAY
            </Button>
            <Button variant="raised" color="primary" className={this.state.mode === 'return' ? 'active' : ''} onClick={this.handleChange_return}>
              RETURN
            </Button>
            <Button variant="raised" color="primary" className={this.state.mode === 'multi' ? 'active' : ''} onClick={this.handleChange_multi}>
              MULTI-CITY
            </Button>
          </div>
          <div className="al-config">
            <div className="al-column al-1">
              <div className="al-comp">
                <p className="al-title">Leaving From</p>
                <div className="al-input">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <input/>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </div>
              </div>
              <div className="al-comp">
                <p className="al-title"></p>
                <div className="al-input mark"><img width="40px" src={returnpng}/></div>
              </div>
              <div className="al-comp">
                <p className="al-title">Going to</p>
                <div className="al-input">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <input/>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="al-column al-2">
              <div className="al-comp">
                <p className="al-title">Departure Date</p>
                <div className="al-input"><i className="fa fa-calendar-minus-o" aria-hidden="true"></i><input type="date" /></div>
              </div>
              <div className="al-comp">
                <p className="al-title">Return Date</p>
                <div className="al-input"><i className="fa fa-calendar-check-o" aria-hidden="true"></i><input type="date" /></div>
              </div>
              <div className="al-comp">
                <p className="al-title">Adults (18+)</p>
                <div className="al-input al-num">
                  <input type="number" min="1"/>
                </div>
              </div>
              <div className="al-comp">
                <p className="al-title">Children (0-17)</p>
                <div className="al-input al-num">
                  <input type="number" min="0"/>
                </div>
              </div>
            </div>
          </div>
          <div className="searchbtn">
            <Button variant="raised" color="primary" id="search">
              SEARCH
            </Button>
          </div>
        </div>
      </div>
    )
  }
}