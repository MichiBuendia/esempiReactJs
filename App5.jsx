import React from 'react';

class App5 extends React.Component {
   render() {
      return (
         <div>
            <h2>Qui passo i props nel main</h2>
            <h4>{this.props.headerProp}</h4>
            <h5>{this.props.contentProp}</h5>
         </div>
      );
   }
}

export default App5;
