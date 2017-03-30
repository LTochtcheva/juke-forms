import React from 'react';
import PlaylistInput from '../components/PlaylistInput';

class NewPlaylist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      validInput: true
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
    this.validate(this.state.inputValue)
  }
//function validate(input val) => true/false isValid
  validate (input) {
    if (input.length <= 16 && input.length > 0 ) this.setState({
      validInput: true})
    else this.setState({
      validInput: false
    })
  }

  submitPlaylist(event) {
    console.log(this.state.inputVlue)
    event.preventDefault();
    this.setState({
      inputValue : ""
    })
  }

  render() {
    return (
        <div>
          <PlaylistInput onChange={this.handleChange} onSubmit={this.submitPlaylist} inputValue={this.state.inputValue} isValid={this.state.validInput} />
        </div>
      );
  }

}

export default NewPlaylist;
