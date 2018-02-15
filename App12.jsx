import React from 'react';
import { App12_1 } from './App12_1.jsx';

class App12 extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <App12_1 name="Alison" signedIn={true}/>
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}

export default App12; 
