import React from "react";
import {Card,CardContent,Typography} from "@mui/material";
import { Nextsqu } from "./Nextsqu";
import { Pownum } from "./Pownum";


export const Square=()=>{
    return(
     <Card sx={{ bgcolor: "chocolate" }}>
        <CardContent>
        <Typography variant="h4"> Square  </Typography>
        <Nextsqu/>
        <Pownum/>
        </CardContent>
     </Card>
    )
}