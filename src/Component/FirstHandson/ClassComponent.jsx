import React from 'react'
import './FristStyle.css'
import { Component } from 'react';

 class ClassComponent extends Component{
   // constructor(){
   //    super();
   //    this.state={
   //       clickbtn1:false
   //    }
   // }
   render(){
      return (
         <>
           {/* <button className="Btn2" onClick={()=>this.setState({clickbtn1: !this.state.clickbtn1})}>To see styling in class component</button> */}
          {/* {this.state.clickbtn1 ?<ClassComponent/>:null} */}
         <div className='Chagecolor'>
            <h1>This is created using Class component</h1>
            <h2>This is done using external css</h2>
            <h4>This is done using inline css</h4>
        </div>
        
        </>
      )
   }
 }

 export default ClassComponent;

