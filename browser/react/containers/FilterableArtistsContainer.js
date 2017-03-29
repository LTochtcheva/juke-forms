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

  render () {
    return (
      <div>
        <FilterInput onChange={event => event.target.value} />
          // ^ START HERE. Props
        <Artists artists={props.artists} />
      </div>
    );
  }
}



export default FilterableArtistsContainer;
