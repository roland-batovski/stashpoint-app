const cityStasherStagingBaseURL = 'https://api-staging.stasher.com/v1/'

export default function getStashpoints() {
	console.log('loaded stash points')

	fetch(cityStasherStagingBaseURL + 'stashpoints')
	.then(res => res.json())
      .then(
        (result) => {
          return result
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
}