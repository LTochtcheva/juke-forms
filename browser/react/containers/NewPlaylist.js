import React from 'react';
import PlaylistInput from '../components/PlaylistInput';

class NewPlaylist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.submitPlaylist = this.submitPlaylist.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

  }

  handleChange (event) {
    this.setState({
      inputValue : event.target.value
    })
  }

  submitPlaylist(event) {
    console.log(this.state.inputValue)
    event.preventDefault();
  }

  render() {
    return (
        <div>
          <PlaylistInput onChange={this.handleChange} onSubmit={this.submitPlaylist} />
        </div>
      );
  }

}

export default NewPlaylist;
