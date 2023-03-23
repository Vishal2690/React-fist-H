// First HandSon

import React from "react";
import {useState} from "react";
import FunctionComponent from "./Component/FirstHandson/FunctionComponent";
import ClassComponent from "./Component/FirstHandson/ClassComponent";

const App=()=>{
    const [show, setshow] = useState(false); //show is current state and setshow is function and it will update show
    const clickbtn = () =>{
      setshow(!show)
    }

    const [flag, setflag] = useState(false);
    const clickbtn1 = () => {
      setflag(!flag)
    }

  return (<div>
          <div className="Give-col"><h1>Styling using Function and Class Component</h1> </div>
          <button className="Btn1" onClick={clickbtn}>To see styling in functional component</button>
          <button className="Btn2" onClick={clickbtn1}>To see styling in class component</button>
          {show ? <FunctionComponent/>:" "}
          {flag ? <ClassComponent/> : " "}
    </div>
  )

}
export default App;























//***********************************************************************************************************


// Second HandSon

// import React, { Component } from "react";
// import "./Component/SecondHandson/Style.css";

// export default class App extends Component {
//   state = {

//     Name2 : "",
//     Department : "",
//     Rating : "",
//     employees : [],
//   };

//   changeHandler = (v) => {
//     this.setState({ [v.target.name]: v.target.value });
//   };

//   formSubmit = (v) => {
//     const empObj = 
//     {
//       Name: this.state.Name2,
//       Department: this.state.Department,
//       Rating: this.state.Rating,
//     };
//     const arr = this.state.employees;
//     arr.push(empObj);
//     this.setState({ employees: arr });
//   };

//   render() {
//     return (
//       <>
//         <h1>EMPLOYEE FEEDBACK FORM</h1>
//         <div className="listOfAdding">
//           <form>
//             <label htmlFor="Name" id="size">Name : </label>
//             <input   id="moving"  type="text" name="Name2" value={this.state.Name}  onChange={this.changeHandler}></input>
//             <br />
//             <label>Department : </label>
//             <input    id="moving2"   type="text"   name="Department"  value={this.state.Department}   onChange={this.changeHandler}></input>
//             <br />
//             <label id="size2">Rating : </label>
//             <input   id="moving3" type="number"  name="Rating"  value={this.state.Rating} onChange={this.changeHandler}></input>
//             <br />
//           </form>
//         </div>
//         <div className="addBtn">
//           <button type="button" onClick={this.formSubmit}>
//             Submit
//           </button>
//         </div>

//         <div  className="hideCssAdd">
//           {this.state.employees.map((value,index) => 
//           {
//             return (
          
//                 <span className="hideCssAd" ket={index}>{value.Name}{value.Department}{value.Rating}</span>
              
//             );
//           })}
//         </div>
//       </>
//     );
//   }
// }




