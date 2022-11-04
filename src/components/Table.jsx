import React from "react";
import {Card,CardContent,Typography} from "@mui/material";
 import {Table2} from "./Tables/Table2"
import { Dyntable } from "./Tables/Dyntable";


export const Table=()=>{
    return(
        <Card sx={{bgcolor: "aqua"}}>
           <CardContent>
               <Typography variant="h4" > Tables </Typography>
               <Dyntable/>
               {/* <Table2/> */}
             </CardContent>
        </Card>
    )
}