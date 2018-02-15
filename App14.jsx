import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './App14_1.jsx';

class App14 extends React.Component {
  render() {
    return (
      <div>
        <label> children.props </label>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

export default App14;
