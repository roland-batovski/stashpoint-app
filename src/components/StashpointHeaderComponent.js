import React, { Component } from 'react';
import './../App.css';
import StashpointFilterComponent from './StashpointFilterComponent';
import StashpointSortComponent from './StashpointSortComponent';

class StashpointHeaderComponent extends Component {


  render() {
    return (
        <div className="StashpointHeaderContainer">
            <StashpointFilterComponent onClickOption={this.props.onClickFilterOption}/>
            <StashpointSortComponent onClickOption={this.props.onClickSortOption}/>
        </div>
    );
  }
}


export default StashpointHeaderComponent;
