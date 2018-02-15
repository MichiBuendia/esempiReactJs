import React from 'react';
import ReactDOM from 'react-dom';

export class App8 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userInput: "" };

    this.handleUserInput = this.handleUserInput.bind(this);

  }

  handleUserInput(e){
    this.setState({
      userInput : e.target.value});
  }

  render() {
    return (
      <div>
      <label>REACT FORMS</label><br />
      <input onChange={this.handleUserInput} type="text" value={this.state.userInput} />
      <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

export default App8;
