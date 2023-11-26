import Axios from "axios"
import { useEffect, useState } from "react"
const GenerateCat = () => {
    const [catFact, setCatFact] = useState("");
    const fetchCat = () =>{
            Axios.get("https://catfact.ninja/fact").then((response)=>{
                // console.log(response.data)
                setCatFact(response.data.fact)
            })
    }
    useEffect(()=>{
        fetchCat()
    },[])
    return (
        <>
        <button onClick={fetchCat}>Generate Cat</button>
        <p>{catFact}</p>
        <br/>
    </>
  )
}

export default GenerateCat





//     fetch("https://catfact.ninja/fact")
// .then((response)=>response.json())
// .then((data)=>{
//     console.log(data.fact)
// });