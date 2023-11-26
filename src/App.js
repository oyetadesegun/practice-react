import { useState } from "react";
import "./App.css";
// import MorePractice from "./MorePractice";
import {Test} from './Test';
import GenerateCat from './GenerateCat'
import { NewComponent } from "./NewComponent";
function App() {
  const [age, setAge] = useState(0);
  const [inputText, setInputText] =useState('');
  // const [clicked, isClicked] =useState(false);
  const [showText,setShowText] = useState(true);
  const [textColor, setTextColor] = useState("blue");
  // const age= 0
  // const [reset, setReset] = useState(false);
  return (
    <>
      <div className="App">
        {age} 
        <br/>
        <div  > 
          <button onClick={()=>setAge(age + 1)}>Increase Age</button>
          <button onClick={()=>setAge(age -1)}>Decrease Age</button>
          <button style={{background:"red"}} onClick={()=>setAge(0)}>Cancel</button>
        </div>
        <hr/>
        <div><input type='text' onChange={(event)=>setInputText(event.target.value)} /></div>
        
       <div> {inputText}</div>
       <hr/>



       {/* <hr/>
        <div><input type='text'/></div>
        
       <div>{isClicked && <h1>show me</h1>}</div>
       <div><button onClick={()=>isClicked(false)}>SUBMIT</button></div>
       <hr/> */}



      <button onClick={()=>{setShowText(!showText)}} >Show/Hide</button>
      <button onClick={()=>{setTextColor(textColor==="black"?"red":"black"); setShowText(true)}}>Change Color</button>
      {/* <button onClick={()=>{setReset(()=>showText(true))}}>Reset</button> */}
      {/* {reset &&<h1 style={{color:"black"}}>My name is John</h1>} */}
      {showText &&<h1 style={{color:textColor}}>My name is John</h1>}
      </div>
      <hr/>
      {/* <MorePractice/> */}
      <hr/>
      <Test/>
      <hr/>
      <NewComponent/>
      <hr/>
      <GenerateCat/>
    </>
  );
}

export default App;
