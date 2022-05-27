import React, { Component } from "react";
import MemoComp from "./MemoComp";
import Test from "./PureComponent";
import RegularComponent from "./RegularComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "deepika",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "deepi" });
    }, 2000);
  }

  render() {
      console.log("parent component rendered")
    return (
      <div>
        ParentComponent
        <MemoComp name={this.state.name}/>
        {/* <RegularComponent name={this.state.name} />
        <Test name={this.state.name} /> */}
      </div>
    );
  }
}
export default ParentComponent;
