import React,{useState} from "react";

export const Counter=()=>{
    const[num,setNum]=useState(0);
    return(
     <React.Fragment>
       <button onClick={()=>setNum(num - 1)}> - </button>
       <b> {num} </b>
       <button onClick={()=>setNum(num + 1)}> + </button>
     </React.Fragment>
    )
}