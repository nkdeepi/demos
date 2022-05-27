import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:"ammu"
        }
        console.log("constructor logged A")
    }
    static getDerivedStateFromProps(props,state){
        console.log("get derived state from props logged A")
        return null
    }
    componentDidMount(){
        console.log("component did mount logged A")
    }
    shouldComponentUpdate(){
        console.log("should component update logged A")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("snapshot update logged A")
        return null
    }
    changeState=()=>{
this.setState({name:"hello"})
    }
  render() {
      console.log("render logged A")
    return (
      <div>
          <div>
              LifeCycleA
              <button onClick={this.changeState}>Change</button>
            
          </div>
          {/* <LifeCycleB/> */}
          
      </div>
    )
  }
}
export default LifeCycleA;