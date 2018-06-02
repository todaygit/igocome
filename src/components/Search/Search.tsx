import * as React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
  modeChange = (e) => this.setState({mode: e.target.value})
  render() {
    return (
      <div className="al-container">
        {/* <h4 style={{position:'fixed'}}>{JSON.stringify(this.state)}</h4> */}
        <div className="al-card">
          <div className="al-config">
            <div className="al-top">
              <h2 className={this.state.result ? 'hide' : 'show'}>Search Coach and bus trips</h2>
              <div className="al-mode">
                <FormControl component="fieldset" required>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    // className={classes.group}
                    value={this.state.mode}
                    onChange={this.modeChange}
                  >
                    <FormControlLabel value="return" control={<Radio color="primary" />} label="Return" />
                    <FormControlLabel value="oneway" control={<Radio color="primary" />} label="One Way" />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="btn-mode">
                <button onClick={this.handleChange_return} className={"modebtn " + (this.state.mode=='return' ? 'active' : '')}>Return</button>
                <button onClick={this.handleChange_one} className={"modebtn " + (this.state.mode=='oneway' ? 'active' : '')}>One Way</button>
              </div>
            </div>
            <div className={"al-inputs"} style={{display: this.state.result ? 'flex' : 'block'}}>
              <div className="al-places al-column al-1">
                <div className="al-comp">
                  <p className="al-title">Leaving From</p>
                  <div className="al-input">
                    <i style={{color: this.state.from ? '#040333' : '#ccc'}} className="fa fa-map-marker" aria-hidden="true"></i>
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
                <div className={"al-comp al-exchange " + (this.state.result ? 'hide' : 'show')}>
                  <p className="al-title"></p>
                  <div className="al-input mark"><img width="40px" src={returnpng}/></div>
                </div>
                <div className="al-comp">
                  <p className="al-title">Going to</p>
                  <div className="al-input">
                    <i style={{ color: this.state.to ? '#040333' : '#ccc' }} className="fa fa-map-marker" aria-hidden="true"></i>
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
              <div className="al-others">
                <div className="al-dandn al-column al-2">
                  <div className="al-dates">
                    <div className="al-comp al-date">
                      <p className="al-title">Departure Date</p>
                      <div className="al-input al-date">
                        <i style={{ color: this.state.departure ? '#040333' : '#ccc' }} className="fa fa-calendar-minus-o" aria-hidden="true"></i>
                        <input onChange={e => this.setState({ departure: e.target.value })} value={this.state.departure} type="date" />
                      </div>
                    </div>
                    <div className="al-comp al-date" style={{display: this.state.mode=='oneway' ? 'none' : 'block'}}>
                      <p className="al-title">Return Date</p>
                      <div className="al-input al-date">
                        <i style={{ color: this.state.return ? '#040333' : '#ccc' }} className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <input onChange={e => this.setState({return: e.target.value})} value={this.state.return} type="date" />
                      </div>
                    </div>
                  </div>
                  <div className="al-nums" style={{display:'flex'}}>
                    <div className={"al-comp al-num " + (this.state.result ? 'hide' : 'show')}>
                      <p className="al-title">Adults (18+)</p>
                      <div className="al-input al-inum ">
                        <input value={this.state.adults} onChange={e => this.setState({adults: e.target.value})} type="number" min="1"/>
                      </div>
                    </div>
                    <div className={"al-comp al-num " + (this.state.result ? 'hide' : 'show')}>
                      <p className="al-title">Children (0-17)</p>
                      <div className="al-input al-inum">
                        <input value={this.state.childrens} onChange={e => this.setState({ childrens: e.target.value })} type="number" min="0"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="al-comp al-searchbtn">
                  <p className="al-title">&nbsp;</p>
                  <div className="al-btnwrap">
                    <Button variant="raised" color="primary" onClick={e => this.setState({ result: !this.state.result })}>
                      Search Trips
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: this.state.result ? 'flex' : 'none' }} className="al-again">
              <p>{this.state.adults} Adult, All Bus Companies, All classes</p>
              <p className="retry" onClick={(e) => this.setState({result: !this.state.result})}>Start Again</p>
            </div>
          </div>
        </div>
        <div className="result" style={{display: this.state.result ? 'block' : 'none'}}>
          <SearchResult />
        </div>
      </div>
    )
  }
}

