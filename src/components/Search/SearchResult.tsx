import * as React from "react";
import "./SearchResult.scss"

const Category = ({title,from,contents}) => {
  const list = contents.map(
    ii => (<h3>{ii.title},{ii.value}</h3>)
  );
  return (
    <div>
      <div className="r-title">
        <h2>{title}</h2>
        <h2>{from ? 'From' : ''}</h2>
      </div>
      <div className="r-content">
        {list}
      </div>
    </div>
  );
}

export default class SearchResult extends React.Component<{},any> {
  content = [
    { title: 'Direct',count: 3, value: '₦13,123' }, 
    { title: '1 Stop',count: 9, value: '₦10,000' }, 
    { title: '2+ Stop',count: 14, value: '₦8,069' }, 
  ];
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
            <Category title="Stops" from={true} contents={this.content}/>
          </div>
          <div className="al-left">
            <h1>Coming Soon...</h1>
          </div>
        </div>
      </div>
    );
  }
}