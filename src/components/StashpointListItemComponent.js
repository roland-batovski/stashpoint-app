import React, { Component } from 'react';

class StashpointListItemComponent extends Component {

  render() {
  	// magic to capitalise city name
  	let nearestCity = this.props.nearestCity.substring(0,1).toUpperCase() + this.props.nearestCity.substring(1);
  	let contactName = this.props.contact.name != null ? this.props.contact.name : 'N/A';
  	let contactEmail = this.props.contact.email != null ? this.props.contact.email : 'N/A';
  	let contactPhone = this.props.contact.phone_number != null ? this.props.contact.phone_number : 'N/A';

  	let open = this.props.openLate ? 'Yes' : 'No';

  	if (this.props.openAlways)
  		open = 'Open 24/7';

  	let description = this.props.description != null ? this.props.description : 'Description not available.';
  	let rating = this.props.rating != null ? this.props.rating + ' average from ' + this.props.ratingCount + ' ratings.' : 'Not yet rated.';

    return (
    	<li>
    	<div className="StashpointListItemContainer">
    		<div className="row">
    			<div className="ImageBlock">
	    			<img className="StashpointAvatarImg" src={this.props.image} alt='Stashpoint Avatar'/>
	    		</div>
	    		<div className="DetailsBlock">
	    			<p className="StashpointLargeText">{this.props.name}</p>
	    			<p className="StashpointSmallText">{this.props.location}</p>
	    			<p className="StashpointSmallText">Nearest City: {nearestCity}</p>
	    			<p className="StashpointSmallText">Open Late: {open}</p>
	    		</div>

	    		<div className="ContactBlock">
	    			<p className="StashpointLargeText">Contact Details</p>
	    			<p className="StashpointSmallText">Name: {contactName}</p>
	    			<p className="StashpointSmallText">Email: {contactEmail}</p>
	    			<p className="StashpointSmallText">Phone: {contactPhone}</p>
	    		</div>
	    	</div>
	    	<div className="Separator"/>

	    	<div className="row">
	    		<div className="DescriptionBlock">
	    			<p className="StashpointLargeText">Description</p>
	    			<p className="StashpointSmallText">{description}</p>
	    			<p className="StashpointSmallText">Capacity: {this.props.capacity}</p>
	    			<p className="StashpointSmallText">Rating: {rating}</p>
	    			<p className="StashpointSmallText inline-text">Views Last Month: {this.props.views}</p>
	    		</div>

	    		<div className="PriceBlock">
	    			<p className="StashpointLargeText">Prices</p>
	    			<p className="StashpointSmallText">First Day Cost: {this.props.pricing.first_day_cost} {this.props.pricing.ccy}</p>
	    			<p className="StashpointSmallText">First Day Commission: {this.props.pricing.first_day_commission} {this.props.pricing.ccy}</p>
	    			<p className="StashpointSmallText">Extra Day Cost: {this.props.pricing.extra_day_cost} {this.props.pricing.ccy}</p>
	    			<p className="StashpointSmallText">Extra Day Commission: {this.props.pricing.extra_day_commission} {this.props.pricing.ccy}</p>

	    		</div>
	    	</div>
    	</div>
     	</li>
    );
  }

}

export default StashpointListItemComponent;
