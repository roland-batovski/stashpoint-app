import React, { Component } from 'react';
import './../App.css';

class StashpointSortComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {capacitySelected: false, bagsSelected: false};
		this.clickedCapacity = this.clickedCapacity.bind(this);
		this.clickedBags = this.clickedBags.bind(this);
	}

  render() {
  	let capacityDivClassName = this.state.capacitySelected ? "SortOptionContainerSelected" : "SortOptionContainer";
  	let bagsDivClassName = this.state.bagsSelected ? "SortOptionContainerSelected" : "SortOptionContainer";

    return (
        <div className="StashpointSortContainer">
            <p className="SortLabel">Sort By</p>
            <div className="row">
            	<div className={capacityDivClassName} onClick={this.clickedCapacity}>
            		<p className='SortOption'>Capacity</p>
            	</div>

            	<div className={bagsDivClassName} onClick={this.clickedBags}>
            		<p className='SortOption'>Bags Last Month</p>
            	</div>
            </div>	
        </div>
    );
  }

  clickedCapacity() {
  	this.setState({
  		capacitySelected: !this.state.capacitySelected,
  		bagsSelected: false,
  	});
  	if (!this.state.capacitySelected)
  		this.props.onClickOption('by_capacity');
  	else
  		this.props.onClickOption('empty');
  }

  clickedBags() {
  	this.setState({
  		capacitySelected: false,
  		bagsSelected: !this.state.bagsSelected,
  	});
  	if (!this.state.bagsSelected)
  		this.props.onClickOption('by_bags_last_30_days');
  	else
  		this.props.onClickOption('empty');
  }
}


export default StashpointSortComponent;
