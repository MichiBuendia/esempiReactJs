import React from 'react';

class App9 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   render() {
      return (
         <div>
            <Int />
            <Content myDataProp = {this.state.data}
               updateStateProp = {this.updateState}></Content>
         </div>
      );
   }
}

class Int extends React.Component {
   render() {
      return (
         <div>
            <h2>Update form child</h2>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <input type = "text" value = {this.props.myDataProp}
               onChange = {this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}
export default App9;