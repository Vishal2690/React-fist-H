
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
          {flag ? <ClassComponent/>:" "}
    </div>
  )
}
export default App;