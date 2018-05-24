import * as React from "react";
import Checkbox from '@material-ui/core/Checkbox';

import "./SearchResult.scss"

const Category = ({title,from,contents}) => {
  const list = contents.map(
    ii => (
      <div className="al-row">
        <Checkbox
          style={{ width: '20px', marginRight: '15px'}}
          value="checkedB"
          color="primary"
        />
        <p className="val">{ii.title}</p>
        <p className="val grow">&nbsp;({ii.count})</p>
        <p>{ii.value}</p>
      </div>
    )
  );
  return (
    <div>
      <div className="r-title">
        <h3>{title}</h3>
        <h3>{from ? 'From' : ''}</h3>
      </div>
      <div className="r-content">
        {list}
      </div>
    </div>
  );
}

const Transport = ({detail}) => {
  return (
    <div className="transport">
      <div className="times">
        <h4>{detail.leaving}-{detail.arriving}</h4>
        <p className="company">{detail.company}</p>
      </div>
      <div className="duration">
        <h4>{detail.duration}&nbsp;({detail.stops})</h4>
        <p>Executive Coach</p>
      </div>
      <div className="cost">
        <h4>₦{detail.cost}</h4>
        <p>Outbound Price<br/>Includes fees and taxes</p>
      </div>
      <div className="select">
        <button>Select</button>
      </div>
    </div>
  );
}

export default class SearchResult extends React.Component<{},any> {
  constructor(props) {
    super(props);
    this.state = {
      sort: 10
    }
  }
  content1 = [
    { title: 'Direct',count: 3, value: '₦13,123' }, 
    { title: '1 Stop',count: 9, value: '₦10,000' }, 
    { title: '2+ Stop',count: 14, value: '₦8,069' }, 
  ];
  content2 = [
    { title: 'Mini Bus', count: 13, value: '₦8,069' },
    { title: 'Coach', count: 11, value: '₦10,000' },
    { title: 'Executive Coach', count: 2, value: '₦13,123' },
  ];
  content3 = [
    { title: 'All', count: 13, value: '₦8,069' },
    { title: 'ABC transport', count: 11, value: '₦10,000' },
    { title: 'Chisco', count: 5, value: '₦13,123' },
    { title: 'Cross country', count: 5, value: '₦13,123' },
    { title: 'Guo motors', count: 5, value: '₦8,069' },
    { title: 'Gig Motors', count: 5, value: '₦10,000' },
    { title: 'Peace Mass Transit', count: 5, value: '₦13,123' },
  ];
  content4 = [
    { title: 'Morning (5:00am - 11:59am)', count: 13, value: '₦8,069' },
    { title: 'Afternoon (12:00pm - 5:59pm)', count: 8, value: '₦10,000' },
    { title: 'Evening (6:00pm - 11:59pm)', count: 5, value: '₦13,123' },
  ];
  content5 = [
    { title: 'All', count: 13, value: '' },
    { title: 'Bus Station A', count: 13, value: '' },
    { title: 'Bus Station B', count: 13, value: '' },
    { title: 'Bus Station C', count: 13, value: '' },
  ];
  transport1 = {
    leaving: '08:30',
    arriving: '12:45',
    duration: '12:45',
    stops: 5,
    cost: '8,690',
    company: 'ABC transport'
  }
  render() {
    return (
      <div className="res-container">
        <div className="al-header">
          <div className="al-1">
            <h1>Select your departure to Lagos</h1>
            <p className="al-date">Monday, 24 May</p>
          </div>
          <div className="al-2">
            <p className="desc">
              Prices are listed for 1 direction only. They include any fees or taxes.
            </p>
          </div>
        </div>
        <div className="al-content">
          <div className="al-right">
            <Category title="Stops" from={true} contents={this.content1}/>
            <Category title="Transport type" from={true} contents={this.content2}/>
            <Category title="Transport Provider" from={false} contents={this.content3}/>
            <Category title="Departure Time" from={false} contents={this.content4}/>
            <Category title="Departure Bus Station" from={false} contents={this.content5}/>
          </div>
          <div className="al-left">
            <div className="sort-type">
              <select name="sort" id="sort">
                <option value="price_l">Price (Lowest)</option>
                <option value="price_h">Price (Highest)</option>
                <option value="time">Time</option>
                <option value="speed">Speed</option>
              </select>
            </div>
            <Transport detail={this.transport1}/>
            <Transport detail={this.transport1}/>
          </div>
        </div>
      </div>
    );
  }
}