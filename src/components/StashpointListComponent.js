import React, { Component } from 'react';
import './../App.css';
import StashpointListItemComponent from './StashpointListItemComponent'

class StashpointListComponent extends Component {

  render() {
    return (
      <ItemList items={this.props.items}/>
    );
  }
}

function ItemList(props) {
    const items = props.items;
    const list = items.map((item) => 
      <StashpointListItemComponent name={item} />
    );

    return (<ul>{list}</ul>);
}

export default StashpointListComponent;
