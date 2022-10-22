import { Grid,Button } from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";

export const Topnav=()=>{
    return(
       <React.Fragment>
        <Grid container spacing={2}>
         <Grid className="img" item xs={1}>
          <img  src="/images/pickup.jpg" width={80} height={60} alt="PickupBiz" />
         </Grid>
         <Grid item xs={1}>
       <Link to="/number" className="tabnav">
        <Button variant="contained" color="warning">Number </Button>
      </Link>
         </Grid>
         <Grid item xs={1}>
         <Link to="/table" className="tabnav">
         <Button variant="contained" color="success" > Tables </Button>
         </Link>
         </Grid>
         <Grid item xs={1}>
         <Link to="square" className="tabnav">
         <Button variant="contained" color="success">Square </Button>
         </Link>
         </Grid>
         {/* <Grid item xs={1.5}>
         <Link to="/Numsquare" className="tabnav">
         <Button variant="contained" color="success">Numsquare </Button>
         </Link>
         </Grid> */}
         <Grid item xs={1}>
         <Link to="/Numadd" className="tabnav">
         <Button variant="contained" color="warning">Numadd </Button>
         </Link>
         </Grid>
         <Grid item xs={1}>
         <Link to="/Geo" className="tabnav" >
            <Button variant="contained" color="warning">Geo </Button>
         </Link>
         </Grid>
         {/* <Grid item sx={1}>
         <Link to="/todos" className="tabnav" >
            <Button variant="contained" color="success"> Todos </Button>
         </Link>
         </Grid> */}
         <Grid item sx={2}>
         <Link to="/Pra" className="tabnav" >
            <Button variant="contained" color="success"> Wish </Button>
         </Link>
         </Grid>
         <Grid item sx={2}>
        <Link to="/smartyshop" className="tabnav">
     <Button variant="contained" color="success" >Smarty Shop</Button>
        </Link> </Grid>
        <Grid item sx={1}>
         <Link to="/myconnect" className="tabnav" >
            <Button variant="contained" color="success"> my connect  </Button>
         </Link>
         </Grid>
        
        </Grid>
       </React.Fragment>

    )
}