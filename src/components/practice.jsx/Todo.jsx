
import React,{useState} from "react";

export const Todo=()=>{
    const[text,setText]=useState("");
    const[list,setList]=useState([]);

    const handleAdd=()=>{
        setList([text,...list]);
    }
    const handleDelete=(text)=>{
        const filtered=list.filter(item=>item!==text)
        setList(filtered);
    }
    return(
        <React.Fragment>
            <input type="text" onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            {
                list.map((item)=>{
                    return(
                        <div>
                            <h1> {item} </h1>
                            <button onClick={(e)=>handleDelete(item)} >Delete</button>

                        </div>
                    )
                })
            }
        </React.Fragment>

    )
}