import React from 'react';

class App6 extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         header: "Header from props...",
         content: "Content from props..."
      }
   }
   render() {
      return (
         <div>
            <Int />
            <Header headerProp = {this.state.header}/>
            <Content contentProp = {this.state.content}/>
         </div>
      );
   }
}

class Int extends React.Component {
   render() {
      return (
         <div>
            <h2>Props and State</h2>
         </div>
      );
   }
}




class Header extends React.Component {
   render() {
      return (
         <div>
            <h4>{this.props.headerProp}</h4>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h5>{this.props.contentProp}</h5>
         </div>
      );
   }
}
export default App6;
