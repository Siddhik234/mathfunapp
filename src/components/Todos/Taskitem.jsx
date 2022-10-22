import React from "react"; 
import {Card,CardContent}  from "@mui/material";

export const Taskitem=({item})=>{
    return(
        <React.Fragment>
            <Card sx={{bgcolor:"blueviolet", color:"white"}}>
                 <CardContent > {item} </CardContent>
            </Card>
        </React.Fragment>
    )
}