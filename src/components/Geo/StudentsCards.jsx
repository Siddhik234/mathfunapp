import { Grid } from "@mui/material";
import React,{useState} from "react";
import { data } from "../../services/studata";
import { Studentitem } from "./Studentitem";

export const StudentsCards=()=>{
    const[filt,setFilt]=useState(data);

    return(
        <React.Fragment>
         <Grid container spacing={1}>
        {
            filt.map(item=>
               <Grid item xs={3} className="img" >
               <Studentitem item={item} />
               </Grid>  
                )
        }
         </Grid>
        </React.Fragment>
    )
}