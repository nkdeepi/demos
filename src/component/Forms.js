// import PropTypes from 'prop-types'
// import React, { Component } from 'react'

//   class Forms extends Component {
//     constructor(props){
//       super(props)
//       this.state={fname:"",sname:""};
//       //this.state={inputvalue:"",SecondValue:""};
//       this.inputOne=React.createRef();
//       this.inputTwo=React.createRef();
//     }
//       //state={inputvalue:"",SecondValue:""};
//     onHandleChange=(event)=>{
//        // console.log(event.target.value);
//         this.setState({[event.target.name]:event.target.value}) 
//     };
//     // onHandleChangeTwo=(event)=>{
//     //     //console.log(event.target.value);
//     //     this.setState({SeconValue:event.target.value}) 
//     // };
//     OnSubmit=(event)=>{
//        //console.log(this.state.inputvalue);
//        //console.log(this.state.SecondValue);

//        //console.log(this.state.SeconValue);

//         // <h1>
//         //     {this.state.inputvalue}
//         // </h1>
//         console.log(this.inputOne.value);
//         console.log(this.inputTwo.value);
//     };
//   render() {
//     return (
//       <form>
//            <h1>Form Component</h1>
//            <h1>{this.state.inputvalue}</h1>
//           <input 
//                 type="text" 
//                 name="fname"
//                 ref={input=>this.inputOne=input}>
//           </input>
//           <input 
//                 type="text" 
//                 name="sname"
//                 ref={input=>this.inputTwo=input}>
//           </input>
         
         
//            <button 
//                  type="button "
//                  onClick={this.OnSubmit}>
//                  Submit
//          </button>
//       </form>
          
      

      
//     )
//   }
// }
// export default Forms;