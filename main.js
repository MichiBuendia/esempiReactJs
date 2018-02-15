import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import App2 from './App2.jsx';
import App3 from './App3.jsx';
import App4 from './App4.jsx';
import App5 from './App5.jsx';
import App6 from './App6.jsx';
import App7 from './App7.jsx';
import App8 from './App8.jsx';
import App9 from './App9.jsx';
import App10 from './App10.jsx';
import App11 from './App11.jsx';
import App12 from './App12.jsx';
import App13 from './App13.jsx';
import App14 from './App14.jsx';
import App15 from './App15.jsx';
import App16 from './App16.jsx';
import Parent from './App17_a.jsx';
import Parent2 from './App18_a.jsx';
import Parent3 from './App19a.jsx';
import GuineaPigsContainer from './GuineaPigsContainer.jsx';
import Friend from './App21.jsx';
import BookList from './App22a.jsx';
import Flashy from './App23.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<App2 />, document.getElementById('app2'));
ReactDOM.render(<App3 myProps="Hello"/>,document.getElementById('app3'));
ReactDOM.render(<App4 />, document.getElementById('app4'));
ReactDOM.render(<App5 headerProp = "Header from props..." contentProp = "Content from props..."/>, document.getElementById('app5'));
ReactDOM.render(<App6 />, document.getElementById('app6'));
ReactDOM.render(<App7 />, document.getElementById('app7'));
ReactDOM.render(<App8 />, document.getElementById('app8'));
ReactDOM.render(<App9 />, document.getElementById('app9'));
ReactDOM.render(<App10 />, document.getElementById('app10'));
ReactDOM.render(<App11 firstName='Michi Buendia' />, document.getElementById('app11'));
ReactDOM.render(<App12 />, document.getElementById('app12'));
ReactDOM.render(<App13 />, document.getElementById('app13'));
ReactDOM.render(<App14 />, document.getElementById('app14'));
ReactDOM.render(<App15 />, document.getElementById('app15'));
ReactDOM.render(<App16 />, document.getElementById('app16'));
ReactDOM.render(<Parent />, document.getElementById('app17'));
ReactDOM.render(<Parent2 />, document.getElementById('app18'));
ReactDOM.render(<Parent3 />, document.getElementById('app19'));
ReactDOM.render(<GuineaPigsContainer />, document.getElementById('app20'));
ReactDOM.render(<Friend />, document.getElementById('app21'));
ReactDOM.render(<BookList />,document.getElementById('app22'));

//componentWillMount
ReactDOM.render(<Flashy color='red' />, document.getElementById('app23'));
setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app23')
  );
}, 2000);
