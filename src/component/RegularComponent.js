import React, { Component } from 'react'

class RegularComponent extends Component {
  render() {
      console.log("regular component renderd")
    return (
      <div>RegularComponent {this.props.name}</div>
    )
  }
}
export default RegularComponent;