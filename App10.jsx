import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './App10_1.jsx';

class App10 extends React.Component {
  render() {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" width="180px" height="180px"/>
      </div>
    );
  }
}

ReactDOM.render(
<App10 />,
  document.getElementById('app10')
);

export default App10;
