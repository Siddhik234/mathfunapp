import { Button, Grid, TextField } from "@mui/material";
import { Wishitem } from "./Wishitem";
import React, { useState } from "react";

export const Wishlist=()=>{
    const[data,setData]=useState([]);
    const[filt,setFilt]=useState([]);
    const[wish,setWish]=useState("");


    const handleAdd=()=>{
        setFilt([wish,...data]);
        setData([wish,...data]);
        setWish("");
    }
    const handleSearch=(e)=>{
    const filtered=data.filter(item=>item.toUpperCase().includes(e.target.value.toUpperCase()));
    setFilt(filtered);
     console.log(filtered)
    }
    const handleDelete=(wis)=>{
      const filtered=data.filter(item=>item!==wis);
      setFilt(filtered)
      setData(filtered)
    }

    return(

        <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={3}>
           <TextField fullWidth variant="outlined" value={wish} label="write your wish here" onChange={(e)=>setWish(e.target.value)} />
              </Grid>
              <Grid item xs={3}>
          <Button fullWidth variant="contained" disabled={wish.length<3} onClick={handleAdd} >Add </Button>
              </Grid>
              <Grid item xs={6}>
           <TextField variant="outlined" label="Search...Here" fullWidth onChange={handleSearch} />
              </Grid> 
          {filt.map(item=>{
            return(
                <Grid item xs={3}>
                <Wishitem item={item} handleDelete={handleDelete} />
                </Grid>
          )})
          }
            </Grid>
        </React.Fragment>
    )
}