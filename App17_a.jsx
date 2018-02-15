import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './App17_b.jsx'

class Parent extends React.Component {

  constructor(props) {
  super(props);
  this.state = { name: 'Michi Buendia' };
  }

  render() {
  return <div> <label>Parent pass his state to child by renderizing it</label><Child name={this.state.name} /></div>;
	}

}

export default Parent;
