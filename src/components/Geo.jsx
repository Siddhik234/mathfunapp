import React from "react";
import { Card,CardContent } from "@mui/material";
import { RectFenc } from "./Geo/RectFenc";
import { Students } from "./Geo/Students";
import { Studentsoptm } from "./Geo/Studentsoptm";

export const Geo=()=>{
    return(
        <React.Fragment>
<Card>
    <CardContent>
        <h2>Geomrty</h2>
        <Studentsoptm/>
        {/* <Students/> */}
        <RectFenc/>
    </CardContent>
</Card>
            
        </React.Fragment>
    )
}