import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:"ammu"
        }
        console.log("constructor logged B")
    }
    static getDerivedStateFromProps(props,state){
        console.log("get derived state from props logged B")
        return null
    }
    componentDidMount(){
        console.log("component did mount logged B")
    }
  render() {
      console.log("render logged B")
    return (
      <div>LifeCycleB</div>
    )
  }
}
export default LifeCycleB;