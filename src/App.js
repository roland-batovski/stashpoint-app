import React, { Component } from 'react';
import './App.css';
import StashpointListComponent from './components/StashpointListComponent'

const cityStasherStagingBaseURL = 'https://api-staging.stasher.com/v1/'
const items=[1,2,3,4,5]

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {isLoaded: false};
  }

  componentWillMount() {
    this.getStashpoints();
  }

  getStashpoints() {
  console.log('loaded stash points')

  fetch(cityStasherStagingBaseURL + 'stashpoints')
  .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            stashpoints: this.parseStashpoints(result),
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div className="Container"> 
      {!this.state.isLoaded && <div className="loaderContainer"><div className="loader"/></div>}
      {this.state.isLoaded && <div className="ListContainer"><StashpointListComponent items={this.state.stashpoints} /></div>}
      </div>
    );
  }

  parseStashpoints(stashpoints) {
    console.log('stashpoints ', stashpoints);

    let parsedStashpoints = [];
    for (var i in stashpoints) {
      let parsedStashpoint = {};
      parsedStashpoint.name = stashpoints[i].name;
      parsedStashpoint.location = stashpoints[i].location_name;
      parsedStashpoint.description = stashpoints[i].description;
      parsedStashpoint.image = stashpoints[i].photos.length >0 ? stashpoints[i].photos[0] : '';
      parsedStashpoint.nearestCity = stashpoints[i].nearest_city != null ? stashpoints[i].nearest_city.name : '';
      parsedStashpoint.contact = stashpoints[i].contact != null ? stashpoints[i].contact : [];
      parsedStashpoint.openLate = stashpoints[i].open_late;
      parsedStashpoint.openAlways = stashpoints[i].open_twentyfour_seven;
      parsedStashpoint.rating = stashpoints[i].rating;
      parsedStashpoint.ratingCount = stashpoints[i].rating_count;
      parsedStashpoint.capacity = stashpoints[i].capacity;
      parsedStashpoint.views = stashpoints[i].views_last_30_days;
      parsedStashpoint.pricingStructure = stashpoints[i].pricing_structure;

      parsedStashpoints[i] = parsedStashpoint;
    }

    return parsedStashpoints;
  }
}

export default App;
