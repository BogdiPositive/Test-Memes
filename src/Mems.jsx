import React from 'react'

const mems = ({mem}) => {
  return (
    <div style={{display:"flex", justifyContent:"space-between", margin:'10px'}}>
        <img src={mem.url} alt="mem.name" style={{width:'100px'}} />
        <p>{mem.name}</p>
    </div>
  )
}

export default mems