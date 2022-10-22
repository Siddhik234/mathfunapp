import React,{useState} from "react";
import {Grid,Card,CardContent,TextField} from "@mui/material";

export const Dyntable=()=>{
    const[arr]=useState([1,2,3,4,5,6,7,8,9,10]);
    const[num,setNum]=useState(2);
    return(
        <React.Fragment>
    <Grid container spacing={3}>
         <Grid item xs={12}>
            <TextField label="Enter Number" variant="outlined" onChange={(e)=>setNum(e.target.value)} />
         </Grid>
         {
            arr.map((item)=>
            <Grid item xs={12}>
               <Card>
                <CardContent>
                    <h1> {num} X {item} = {item * num} </h1>
                </CardContent>
               </Card>
            </Grid>
            )
         }
    </Grid>
    </React.Fragment>
    )
}