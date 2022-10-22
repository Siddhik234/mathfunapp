import { Button, Grid, TextField } from "@mui/material";
import React,{useState} from "react";
import { Dishitem } from "./Dishitem";

export const Dishlist=()=>{
    const[data,setData]=useState([]);
    const[filt,setFilt]=useState([])
    const[dis,setDis]=useState("");

    const handleAdd=()=>{
        setFilt([dis,...data])
        setData([dis,...data])
        setDis("");
    }
    const handleSearch=(e)=>{
       const filtered=data.filter(item=> item.toUpperCase().includes(e.target.value.toUpperCase()));
      setFilt(filtered);
       console.log(filtered)    
    };
    const handleDelete=(dish)=>{
        const filtered=data.filter(item=>item!==dish)
        setFilt(filtered);
        setData(filtered);
    };

    return(
        <React.Fragment>
        <h2> My Dishes List</h2>
        <Grid container spacing={3}>
        <Grid item xs={3}>
       <TextField fullWidth variant="outlined" label="dish" value={dis} onChange={(e)=>setDis(e.target.value)} />
        </Grid>
         <Grid item xs={3}>
        <Button fullWidth variant="contained" color="error" disabled={dis.length<3} onClick={handleAdd} > Add </Button>
         </Grid>
         <Grid item xs={6}>
         <TextField label="Search... here" variant="outlined" fullWidth onChange={handleSearch} />
         </Grid>
         
        {
            filt.map(item=>
                 <Grid item xs={3}>
              <Dishitem item={item} handleDelete={handleDelete} /> 
              {/* <Button variant="contained" onClick={handledelete}>delete</Button> */}
                 </Grid>   
                )
        }
         
        </Grid>
        </React.Fragment>
    )
}