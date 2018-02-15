import React from 'react';

class App4 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         header: "Header from state...",
         content: "Content from state..."
      }
   }
   render() {
      return (
         <div>
            <h2>Qui passo gli state nell'App</h2>
            <h4>{this.state.header}</h4>
            <h5>{this.state.content}</h5>
         </div>
      );
   }
}
export default App4;
