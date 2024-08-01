import React from 'react'

const Fillters = ({filterdata}) => {
  return (
    <div style={{borderRadius:8,padding:14 , backgroundColor:"gray", width:150, margin:"auto",color:"white",cursor:"pointer",}}>
        {filterdata.map((index)=>(
        <option style={{padding:5}} key={index.id}>{index.name}</option> 
        )
        )}
    </div>
  )
}

export default Fillters
