import React from 'react';
import ReactDOM from 'react-dom';
import { Child2 } from './App18_b.jsx';

const styles ={
  background: 'lightblue',
  color:      'darkred'
}

class Parent2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Michi' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return <div><label style={styles}>CHILD COMPONENTS UPDATE THEIR PARENTS' STATE</label><Child2 name={this.state.name} onChange={this.changeName} /></div>
  }
}

export default Parent2;
