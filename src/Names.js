// import React from 'react'

const Names = () => {
    const names=["Pedro", "Jake", "Jessica", 'mike', "Dustin"];
  return (
    <div >
        <h1>teste</h1>
        {names.map((name,key)=>{
          return  <h1 key={key}>{name}</h1>
        })}
    </div>
  )
}

export default Names