import React, { Component } from 'react';
import './App.css';
import StashpointListComponent from './components/StashpointListComponent'

const cityStasherStagingBaseURL = 'https://api-staging.stasher.com/v1/'
const items=[1,2,3,4,5]

class App extends Component {

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

      <div className="ListContainer">
      <StashpointListComponent items={items} />
      </div>
    );
  }

  parseStashpoints(stashpoints) {
    console.log('stashpoints ', stashpoints);

    let parsedStashpoints = [];

    return parsedStashpoints
  }
}

export default App;
