import React from 'react';

class App extends React.Component {
  render(){

    return(
        <div>
          <Header/>
          <Content/>
        </div>
    );
  }
}

class Header extends React.Component {
   render() {
   var i = 1;
   var myStyle = {
   fontSize: 14,
   color: '#FF0000'
   }
      return (
         <div>
              <h1 style ={myStyle} >Hello World!!! {i == 1 ? 'True!' : 'False'}</h1>
         </div>
      );
   }
}


class Content extends React.Component {
  render(){
    return(
        <div>
          <h6> Hi, I'm Content!</h6>
        </div>
    );
  }
}






export default App;
