import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {

componentWillMount() {
  	alert('Ciao, sono un "componentWillMount", e verrò eseguito solo adesso prima del render');
}

componentDidMount() {
    alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');
}

 render() {
    alert('Flashy is rendering!');
    return (
      <div><label>componentWillMount & DidMount</label>
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
      </div>
    );
  }
}

export default Flashy;
