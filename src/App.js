
import React from "react";
import {useState} from "react";
import FunctionComponent from "./Component/FunctionComponent"
import ClassComponent from "./Component/ClassComponent"

const App=()=>{
    const [show, setshow] = useState(false);
    const clickbtn = () =>{
      setshow(!show)
    }
    const [flag, setflag] = useState(false);
    const clickbtn1 = () => {
      setflag(!flag)
    }

  return (<div id="" > 
          <div className="give-col"><h1>Styling using Function and Class Component</h1> </div>
          <button className="btn1" onClick={clickbtn}>To see styling in functional component</button>
          <button className="btn2" onClick={clickbtn1}>To see styling in class component</button>
          {show ? <FunctionComponent/>:" "}
          {flag ? <ClassComponent/>:" "}
    </div>
  )
}
export default App;
