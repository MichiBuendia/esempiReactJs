import React from 'react';

class App15 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: 'Hi, I\'m a state!' };
  }

  render() {
    return (
    <div>
    <label>state</label>
      <h1>
        {this.state.title}
      </h1>
      </div>
    );
  }
}

export default App15;
