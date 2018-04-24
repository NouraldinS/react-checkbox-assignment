import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";

class Button extends Component {
  constructor() {
    super();
    this.state = {
      Sonia: true,
      Maria: false,
      John: false,
      Michael: true
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    console.log(e.target);
    console.log(this.state);
    const { name } = e.target;
    this.setState({
      ...this.state,
      [name]: !this.state[name]
    });
  }

  render() {
    return (
      <div>
        <label>Sonia</label>
        <input
          type="checkbox"
          name="Sonia"
          value={this.state.Sonia}
          onChange={this.handleInputChange}
        />
        <label>Maria</label>
        <input
          type="checkbox"
          name="Maria"
          value={this.state.Maria}
          onChange={this.handleInputChange}
        />
        <label>John</label>
        <input
          type="checkbox"
          name="John"
          value={this.state.John}
          onChange={this.handleInputChange}
        />
        <label>Michael</label>
        <input
          type="checkbox"
          name="Michael"
          value={this.state.Michael}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Button;

render(<Button />, document.getElementById("root"));
