import React from 'react';
import ReactDOM from 'react-dom';
import { Child3 } from './App19b.jsx';
import { Sibling3 } from './App19c.jsx';

class Parent3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Buendia' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
      <label style={{ background: 'lightblue', color: 'darkred'}}>CHILD COMPONENTS UPDATE THEIR SIBLINGS' PROPS</label>
        <Child3
          onChange={this.changeName} />
        <Sibling3 name={this.state.name} />
      </div>
    );
  }
}

export default Parent3;
