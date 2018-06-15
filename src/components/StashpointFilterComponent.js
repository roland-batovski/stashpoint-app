import React, { Component } from 'react';
import './../App.css';

class StashpointFilterComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {openLateSelected: false, openTwentyFourSelected: false};
		this.clickedOpenLate = this.clickedOpenLate.bind(this);
		this.clickedTwentyFour = this.clickedTwentyFour.bind(this);
	}

  render() {

  	let openLateDivClassName     = this.state.openLateSelected ? "FilterOptionContainerSelected" : "FilterOptionContainer";
  	let twentyFourDivClassName   = this.state.openTwentyFourSelected ? "FilterOptionContainerSelected" : "FilterOptionContainer";
  	let openLateTextClassName    = this.state.openLateSelected ? "FilterOptionSelected" : "FilterOption";
  	let twentyFourTextClassName  = this.state.openTwentyFourSelected ? "FilterOptionSelected" : "FilterOption";

    return (
        <div className="StashpointFilterContainer">
            <p className="FilterLabel">Filter By</p>
            <div className="row">
            	<div className={openLateDivClassName} onClick={this.clickedOpenLate}>
            		<p className={openLateTextClassName}>Open Late</p>
            	</div>

            	<div className={twentyFourDivClassName} onClick={this.clickedTwentyFour}>
            		<p className={twentyFourTextClassName}>Open 24/7</p>
            	</div>
            </div>		
        </div>
    );
  }

  clickedOpenLate() {
  	this.setState({
  		openLateSelected: !this.state.openLateSelected,
  		openTwentyFourSelected: false,
  	});
  	if (!this.state.openLateSelected)
  		this.props.onClickOption('open_late');
  	else
  		this.props.onClickOption('empty');
  }

  clickedTwentyFour() {
  	this.setState({
  		openLateSelected: false,
  		openTwentyFourSelected: !this.state.openTwentyFourSelected,
  	});
  	if (!this.state.openTwentyFourSelected)
  		this.props.onClickOption('twentyfour_seven');
  	else
  		this.props.onClickOption('empty');
  }
}


export default StashpointFilterComponent;
