import React from 'react';

export class Child2 extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Michi">
            Michi
          </option>

          <option value="Josè Arcadio">
            Jose Arcadio
          </option>

          <option value="Aureliano">
            Aureliano
          </option>
        </select>
      </div>
    );
  }
}

export default Child2;
