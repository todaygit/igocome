import * as React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import SearchResult from "./SearchResult";

import "./Search.scss";
var returnpng = require("./assets/return.png");

import * as ReactAutocomplete from "react-autocomplete";
import { cities } from "./assets/locations.js";

export default class Search extends React.Component<{},any> {
  constructor(props) {
    super(props);
    this.state = {
      mode: "return",
      from: '',
      to: '',
      departure: '',
      return: '',
      adults: 1,
      childrens: 0,
      result: false
    }
  }
  handleChange_one = () => this.setState({mode: "oneway"})
  handleChange_return = () => this.setState({mode: "return"})
  handleChange_multi = () => this.setState({mode: "multi"})
  render() {
    return (
      <div className="al-container">
        {/* <h4>{JSON.stringify(this.state)}</h4> */}
        <div className="al-card">
          <div>
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
          </div>
          <div className="al-config">
            <div className="al-column al-1">
              <div className="al-comp">
                <p className="al-title">Leaving From</p>
                <div className="al-input">
                  <i style={{color: this.state.from ? 'dodgerblue' : '#ccc'}} className="fa fa-map-marker" aria-hidden="true"></i>
                  <ReactAutocomplete
                    items={cities}
                    shouldItemRender={(item, value) => item.city.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.city}
                    renderItem={(item, highlighted) =>
                      <div key={item.country} style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}>
                        {item.city}
                      </div>
                    }
                    value={this.state.from}
                    onChange={e => this.setState({ from: e.target.value })}
                    onSelect={value => this.setState({ from: value })}
                  />
                  <i onClick={e => this.setState({ from: '' })} style={{opacity: this.state.from ? 1 : 0}} className="fa fa-times" aria-hidden="true"></i>
                </div>
              </div>
              <div className="al-comp">
                <p className="al-title"></p>
                <div className="al-input mark"><img width="40px" src={returnpng}/></div>
              </div>
              <div className="al-comp">
                <p className="al-title">Going to</p>
                <div className="al-input">
                  <i style={{ color: this.state.to ? 'dodgerblue' : '#ccc' }} className="fa fa-map-marker" aria-hidden="true"></i>
                  <ReactAutocomplete
                    items={cities}
                    shouldItemRender={(item, value) => item.city.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.city}
                    renderItem={(item, highlighted) =>
                      <div
                        key={item.country}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                      >
                        {item.city}
                      </div>
                    }
                    value={this.state.to}
                    onChange={e => this.setState({ to: e.target.value })}
                    onSelect={value => this.setState({ to: value })}
                  />
                  <i onClick={e => this.setState({ to: '' })} style={{ opacity: this.state.to ? 1 : 0 }} className="fa fa-times" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="al-column al-2">
              <div className="al-comp">
                <p className="al-title">Departure Date</p>
                <div className="al-input">
                  <i style={{ color: this.state.departure ? 'dodgerblue' : '#ccc' }} className="fa fa-calendar-minus-o" aria-hidden="true"></i>
                  <input onChange={e => this.setState({ departure: e.target.value })} value={this.state.departure} type="date" />
                </div>
              </div>
              <div className="al-comp" style={{display: this.state.mode=='oneway' ? 'none' : 'block'}}>
                <p className="al-title">Return Date</p>
                <div className="al-input">
                  <i style={{ color: this.state.return ? 'dodgerblue' : '#ccc' }} className="fa fa-calendar-check-o" aria-hidden="true"></i>
                  <input onChange={e => this.setState({return: e.target.value})} value={this.state.return} type="date" />
                </div>
              </div>
              <div className="al-comp">
                <p className="al-title">Adults (18+)</p>
                <div className="al-input al-num">
                  <input value={this.state.adults} onChange={e => this.setState({adults: e.target.value})} type="number" min="1"/>
                </div>
              </div>
              <div className="al-comp">
                <p className="al-title">Children (0-17)</p>
                <div className="al-input al-num">
                  <input value={this.state.childrens} onChange={e => this.setState({ childrens: e.target.value })} type="number" min="0"/>
                </div>
              </div>
            </div>
          </div>
          <div className="searchbtn">
            <Button variant="raised" color="primary" id="search" onClick={e => this.setState({result: !this.state.result})}>
              SEARCH
            </Button>
          </div>
        </div>
        <div className="result" style={{display: this.state.result ? 'block' : 'none'}}>
          <SearchResult />
        </div>
      </div>
    )
  }
}