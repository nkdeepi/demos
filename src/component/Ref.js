import React, { Component } from 'react'

 class Ref extends Component {
     constructor(props) {
       super(props)
     this.inputref=React.createRef();
      
     }
     componentDidMount(){
         console.log("mounted");
         console.log(this.inputref);
         this.inputref.current.focus();
         //input field gets focussed while loading
     }
     clickHandler=()=>{
         alert(this.inputref.current.value)
     }
  render() {
    return (
      <div>Ref
          <br></br>
          <input type="text" ref={this.inputref}></input>
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
export default Ref;
