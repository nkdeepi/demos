import React, { Component } from 'react'
import FRinput from './FRinput';

 class FRparent extends Component {
     constructor(props) {
       super(props)
      // this.click=this.click.bind(this);
     
       this.inputref=React.createRef();
     }
     
    handleClick=()=>{
        this.inputref.current.focus()
    }
  render() {
    return (
      <div>FRparent
          <FRinput ref={this.inputref}/>
          {/* ataching ref to input child */}
          <button onClick={this.handleClick}> focus input</button>
      </div>
    )
  }
}
export default FRparent;