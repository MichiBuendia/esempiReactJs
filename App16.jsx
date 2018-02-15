import React from 'react';

const green = '#39D1B4';
const yellow = '#FFD712';

class App16 extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div style={{background: this.state.color}}>
      <label>setState..but don't call into in render()!!!</label>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
  				Change color
				</button>
        <p>If you call .changeColor(), shouldn't you then also have to call .render() again? .changeColor() only makes it so that, the next time that you render, the color will be different. Why can you see the new background right away, if you haven't re-rendered the component?

Here's why: Any time that you call this.setState(), this.setState() AUTOMATICALLY calls .render() as soon as the state has changed.

Think of this.setState() as actually being two things: this.setState(), immediately followed by .render().

That is why you can't call this.setState() from inside of the .render() method! this.setState() automatically calls .render(). If .render() calls this.setState(), then an infinite loop is created.</p>
      </div>
    );
  }
}

export default App16;
