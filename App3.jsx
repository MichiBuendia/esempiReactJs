import React from 'react';

class App3 extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>Props </h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

export default App3;
