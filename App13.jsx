import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './App13_1.jsx';

class App13 extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }

  render() {
    return (
    <div>
      <label> the importance of word handle </label><br />
      <Button onClick={this.handleClick}/>
    </div>);
  }
}

export default App13;
