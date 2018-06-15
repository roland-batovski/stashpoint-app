import React, { Component } from 'react';
import './App.css';
import StashpointListComponent from './components/StashpointListComponent'
import StashpointHeaderComponent from './components/StashpointHeaderComponent'

const cityStasherStagingBaseURL = 'https://api-staging.stasher.com/v1/'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {isLoaded: false};
    this.onClickFilterOption = this.onClickFilterOption.bind(this);
    this.onClickSortOption = this.onClickSortOption.bind(this);
    this.handleResult = this.handleResult.bind(this);
  }

  componentWillMount() {
    this.getStashpoints();
  }

  getStashpoints(filter=null, sort=null) {
    let url = cityStasherStagingBaseURL + 'stashpoints';
    if ((filter !== null && filter !== 'empty') || (sort !== null && sort !== 'empty'))
      url += '?';

    if (filter && filter !== 'empty')
      url += filter + '=true';

    if (sort && sort !== 'empty')
      url += '&sort=' + sort;
    

    fetch(url)
    .then(res => res.json())
        .then(
          (result) => {this.handleResult(result)},
          (error) => {
            console.log('error', error);
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
  }

  handleResult(result) {
    // Server seems to throw a 500 for when trying to sort=by_bags_last_30_days
    if (result.message === 'Internal Server Error') {
      this.setState({
        isLoaded: true,
        stashpoints: [],
      })
    } else {
      this.setState({
        isLoaded: true,
        stashpoints: this.parseStashpoints(result),
      })
    }
  }

  render() {
    return (
      <div className="Container">
      <StashpointHeaderComponent onClickFilterOption={this.onClickFilterOption} onClickSortOption={this.onClickSortOption}/> 
      {!this.state.isLoaded && <div className="loaderContainer"><div className="loader"/></div>}
      {this.state.isLoaded && <div className="ListContainer"><StashpointListComponent items={this.state.stashpoints} /></div>}
      </div>
    );
  }

  onClickFilterOption(option) {
    this.setState({
      isLoaded: false,
      lastFilterOption: option,
    });

    this.getStashpoints(option, this.state.lastSortOption);
  }

  onClickSortOption(option) {
    this.setState({
      isLoaded: false,
      lastSortOption: option,
    });

    this.getStashpoints(this.state.lastFilterOption, option);
  }

  // Function to parse the response coming from the server in order to allow for easier access
  parseStashpoints(stashpoints) {
    let parsedStashpoints = [];
    for (var i in stashpoints) {
      let parsedStashpoint = {};
      parsedStashpoint.id = stashpoints[i].id;
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
