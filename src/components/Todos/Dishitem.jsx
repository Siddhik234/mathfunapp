import { Card, CardContent,Button } from "@mui/material";
import React from "react";

export const Dishitem=({item,handleDelete})=>{
    return(
        <React.Fragment>
         <Card  sx={{bgcolor:"deeppink",color:"#ffffff"}}>
            <CardContent className="img">
             <p>{item} </p>
             <Button variant="contained" color="primary" onClick={()=> handleDelete(item)} >Delete</Button>
            </CardContent>
         </Card>

        </React.Fragment>
    )
}