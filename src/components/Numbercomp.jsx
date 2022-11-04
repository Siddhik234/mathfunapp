import React from "react";
import {Card,CardContent,Typography} from "@mui/material";
import { Nextnum } from "./Nextnum";


export const Numbercomp=()=>{
    return(
        <Card sx={{bgcolor:"success.main"}} >
            <CardContent>
              <Typography  variant="h4"  > Next Number </Typography> 
              <Nextnum/> 
            </CardContent>
        </Card>
    )
}