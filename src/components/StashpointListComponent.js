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
      <StashpointListItemComponent
        image={item.image}
        name={item.name}
        location={item.location}
        description={item.description}
        nearestCity={item.nearestCity}
        contact={item.contact}
        openLate={item.openLate}
        openAlways={item.openAlways}
        rating={item.rating}
        ratingCount={item.ratingCount}
        capacity={item.capacity}
        views={item.views}
        pricing={item.pricingStructure}/>
    );

    return (<ul>{list}</ul>);
}

export default StashpointListComponent;
