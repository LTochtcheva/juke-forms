import React from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

class FilterableArtistsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentFilterValue: ''
    }
  }

  componentDidMount () {

  }

  updateFilterValue(val) {
    this.setState({
      currentFilterValue: val
    })
  }

  render () {
    const filteredArtists = this.props.artists.filter((artist) => {
      return artist.name.match(this.state.currentFilterValue) || artist.name.toLowerCase().match(this.state.currentFilterValue)
    });
    return (
      <div>
        <FilterInput onChange={event => this.updateFilterValue(event.target.value)} />
        <Artists artists={filteredArtists} />
      </div>
    );
  }
}

export default FilterableArtistsContainer;
