import { useState, useEffect } from "react"

export const NewComponent = () => {
    const [showText, setShowText] = useState(false);
    useEffect(()=>{
        console.log("COMPONENT MOUNTED");
        return ()=>{
            console.log("COMPONENT UNMOUNTED")
        }
    },[]);
  return (
    <div className="App">
       <button onClick={()=>{setShowText(!showText)}}>Show Input</button> 
       {showText && <Textbo/>}
    </div>
  )
}

const Textbo =() =>{
    const [text, setText] = useState("");
    return (
        <div>
            <input onChange={(event)=>{
                setText(event.target.value);
            }}/>
            <h1>{text}</h1>
        </div>
    )
}