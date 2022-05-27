// import  Counter  from "./redux/Counter";

import React, {
  useState,
  useEffect,
  Component,
  useContext,
  createContext,
  PureComponent,
} from "react";
import Todo from "./component/Todo";
// import Counter from "./component/counter";
import Forms from "./component/Forms";
import Lists from "./component/Lists";
import { render } from "@testing-library/react";
import Abort from "./component/Abort/Abort";
import Header from "./component/Header/Header";
import HookCounter from "./component/HookCounter";
import HookCounterOne from "./component/HookCounterOne";
import HookCounterTwo from "./component/HookCounterTwo";
import Useref from "./component/Useref";
import LifeCycleA from "./component/LifeCycleA";
import FRparent from "./FRparent";
import Test from "./component/PureComponent";
import ParentComponent from "./component/ParentComponent";
import Ref from "./component/Ref";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
//import About from "./component/About";
import Navbar from "./component/Navbar";
import OrderSummary from "./component/OrderSummary";
import NoPage from "./component/NoPage";
import Product from "./component/Product";
import Featured from "./component/Featured";
import New from "./component/New";
import User from "./component/User";
import UserDetails from "./component/UserDetails";
import Admin from "./component/Admin";
import { Counter } from "./redux/Counter";
const LazyAbout=React.lazy(()=>import('./component/About'))

export default () => {
  return (
    <div>
      <Counter/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<React.Suspense fallback='loading...'><LazyAbout/></React.Suspense>} />
        <Route path="/OrderSummary" element={<OrderSummary />} />
        <Route path="product" element={<Product />}>
          <Route index element={<Featured />} />
          {/* index :child route renderd at parent level */}
          <Route path="Featured" element={<Featured />} />
          <Route path="New" element={<New />} />
        </Route>
        <Route path="user" element={<User />}>
        <Route path=":userid" element={<UserDetails />}/>
        <Route path="admin" element={<Admin />}/>
        </Route>
        

        {/* user/anything will render user details,if we have lots of users dis  is not possible,so dynamic routing is used as user/:userid */}
        <Route path="*" element={<NoPage />}></Route>
        {/* local port 300 */}
      </Routes>
      {/* <Ref/> */}
      {/* <Test/> */}
      {/* <ParentComponent/> */}
      {/* <ParentComponent/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterOne/> */}
      {/* <HookCounterTwo/> */}
      {/* <Useref/> */}
      {/* <LifeCycleA/> */}
      {/* <FRparent/> */}
    </div>
    // <>
    //   <Header/>
    //   <Abort/>
    //   <Todo/>

    // </>
  );
};

// const context=createContext();
// function Component1(){
//  const [user,setUser]=useState("init");
//  return(

//   <context.Provider value={user}>
//     <h1>{`hello ${user}`}</h1>
//     <Component2 user={user}/>

//   </context.Provider>

//  );

// }
// function Component2(){
//   return(
//     <div>
//       <h1>COMPONENT2</h1>
//     <Component3/>
//     </div>

//   )
// }
// function Component3(){
//   return(
//     <div>
//       <h1>COMPONENT3</h1>
//     <Component4/>
//     </div>

//   )
// }
// function Component4(){
//   return(
//     <div>
//       <h1>COMPONENT4</h1>
//     <Component5/>
//     </div>

//   )
// }
// function Component5(){
//   const user=useContext(context);
//   return(
//     <div>
//       <h1>COMPONENT5</h1>
//     <Component3/>
//     </div>

//   )
// }

// export default Component;
// function Component1(){
//   const [user,setUser]=useState("anu");
//   return(
//     <div>
//       <p>{`hello ${user}`}</p>
//       <Component2 user={user}/>
//     </div>
//   )
// }
// function Component2({user}){
//   return(
//     <div>
//       <h1>
//         component2
//       </h1>
//       <Component3 user={user}/>
//     </div>
//   )

// }
// function Component3({user}){
//   return(
//     <div>
//       <h1>
//         Component3
//       </h1>
//       <p>{`hello ${user} again`}</p>
//     </div>
//   )

// }
// export default Component1;
// function Timing() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let timer = setTimeout(() => {
//       setCount(() => count + 1);
//     });
//     return () => clearTimeout(timer);
//   }, []);
//   return(
//     <div><h1>render {count} times</h1></div>
//   )
// }
// export default Timing;

// function CounterTwo(){
//   const [count,setCount]=useState(0);
//   const [calc,setCalc]=useState(0);
//   useEffect(()=>{
//     setCalc(()=>count*2);

//   },[count])
//   return(
// <div>
// <p>Count:{count}</p>
// <p>Calculation:{calc}</p>
// <button onClick={()=>setCount(()=>count+1)}>click</button>
// </div>
//   )
// }export default CounterTwo;
// class CounterOne extends Component{
//   constructor(props){
//     super(props);
//     this.state={count:0};
//   }

// componentDidMount() {
//   document.title = `You clicked ${this.state.count} times`;
//   console.log("mount");
// }
// componentDidUpdate() {
//   document.title = `You clicked ${this.state.count} times`;
//   console.log("update")
// }

// render()
// {
//   return(
//     <div>
// <p>you clicked {this.state.count }times</p>
// <button onClick={()=>this.setState({count:this.state.count+1})}> click</button>
//     </div>
//   )
// }
// }
// export default CounterOne;
// function Example(){
//   const [count,setCount]=useState(0);
//   useEffect(()=>{
//     document.title=`you clicked ${count}times`;
//   });
//   return(
//     <div>
//       <p>ypu clicked{count}times</p>
//       <button onClick={()=>setCount(count+1)}>click</button>
//     </div>
//   )

// }
// export default Example;
// function Timer(){
//   const[count,setCount]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount((count)=>count+1);
//     },5)
//   },[]);

// return(
//   <div>
// <h1>i have renderd {count}times</h1>

//   </div>
// )
// }export default Timer;

// function Car() {
//   const [car, setCar] = useState({
//     color: "red",
//     brand: "bmw",
//     year: 1960,
//   });
//   const changeColour = () => {
//     setCar(
//       (previousState => {
//         return { ...previousState, color: "Black" }
//       })
//     );
//   }
//  const changeBrand=()=>{
//    setCar(previousState=>{
//      return({...previousState,brand:"swift"})
//    });
//  }
//   return (
//     <div>
//       <p>MY Car brand is {car.brand}</p>
//       <p>MY Car colour is {car.color}</p>
//       <button type="button" onClick={changeColour}>
//         UpdateColour
//       </button>
//       <button type="button" onClick={changeBrand}>
//         Updatebrand
//       </button>
//     </div>
//   );
// }
// export default Car;

// const Example=()=>{
//   const [count,setCount]=useState(0);
//   return(
//     <div>
//       <p>You Clicked {count}times</p>
//       <button onClick={()=>setCount(count+1)}  >click</button>
//     </div>
//   )

// }
// export default Example;
// function FavColour(){
//   const [colour, setColour] = useState("Red");
//   return (
//     <div>
//       <p>My Favourite colour is {colour}</p>
//       <button type="button" onClick={() => setColour("BLUE")}>
//         BLUE
//       </button>
//       <button type="button" onClick={() => setColour("BLACK")}>
//         BLACK
//       </button>
//       <button type="button" onClick={() => setColour("GREEN")}>
//         GREEN
//       </button>
//       <button type="button" onClick={() => setColour("ORANGE")}>
//         ORANGE
//       </button>
//     </div>
//   );
// };
// export default FavColour;
//  class App extends Component {
//     state = { mystring: "hello",mystringtone:8};
//     Handle Change=()=>{
//       this.setState({mystring:"newvalue"})

//     };
//     render() {
//       return (
//         <div className="App">
//           {/* <h1>welcome</h1>
//           <h1>{this.state.mystring}</h1>
//           <h1>{this.state.mystringtone}</h1>
//           <button onClick={this.HandleChange}>changeText</button> */}

//           {/* <Todo mystring={this.state.mystring}/> */}
// {/* <Counter/> */}
// {/* <Forms/> */}
// <Lists/>
//         </div>
//       );
//     }
//   }

// export default App;
