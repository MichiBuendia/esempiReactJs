import React from 'react';

export class Child3 extends React.Component {
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
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Amaranta">Amaranta</option>
          <option value="Remedios">Remedios</option>
          <option value="Ursula">Ursula</option>
        </select>
      </div>
    );
  }
}

export default Child3;
