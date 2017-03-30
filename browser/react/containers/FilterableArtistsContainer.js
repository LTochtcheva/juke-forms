import React from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

class FilterableArtistsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentFilterValue: ''
    }
    this.filteredArtist = []
  }

  componentDidMount () {
    console.log('Here, Zach: ', this.state.currentFilterValue)

//build a filter function(this.state.currentFilterValue)
  }
  updateFilterValue(val) {
    console.log('Val: ', val)
    this.setState({
      currentFilterValue: val
    })
  }
  render () {
    return (
      <div>
        <FilterInput onChange={event => this.updateFilterValue(event.target.value)} />
        <Artists artists={this.filteredArtist} />
      </div>
    );
  }
}



export default FilterableArtistsContainer;
