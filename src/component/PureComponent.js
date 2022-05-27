import React, { PureComponent } from 'react'
  
 class Test extends PureComponent{
     componentDidMount(){
         console.log("test");
        }
        render(){
       
            console.log("pure component renderd")
       return <h1>PureComponent {this.props.name}</h1>;
   }
}
export default Test;





// import React, { PureComponent } from 'react'

//  class PureComponent extends PureComponent {

//      render()
//      {
//          return(
//              <div>
//                  PureComponent
//              </div>
//          )
//      }
//  }
     


