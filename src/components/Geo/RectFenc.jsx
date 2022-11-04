
import React,{useState} from "react";
import {Grid,TextField,Button,Card, CardContent} from "@mui/material";

export const RectFenc=()=>{
    const[l,setL]=useState(0);
    const[b,setB]=useState(0);
    const[layer,setLayer]=useState(1);
    const[pfc,setPfc]=useState(1);
    const[cal,setCal]=useState(0);
    const handleClear=()=>{
      setL(0);
      setB(0);
      setLayer(1);
      setPfc(1);
      setCal(0);
    };
    const handleCalculate=()=>{
      const par= Number(l) + Number(b) + Number(l) + Number(b)
      const totalwire= par * layer
      const Totalcost= totalwire * pfc
       setCal(Totalcost)
    }
    return(
        <React.Fragment>
      <Grid container spacing={3}>
          <Grid item xs={3}>
              <h1>L</h1>
          </Grid>
          <Grid item xs={3}>
              <h1>B</h1>
          </Grid>
          <Grid item xs={3}>
        <h1>Layers </h1>
          </Grid>
          <Grid item xs={3}>
        <h1> Per foot cost </h1>
          </Grid>
          <Grid item xs={3}>
            <TextField type="number"  onFocus={()=>setL("")} value={l} label="enter lenght" variant="outlined" onChange={(e)=>setL(e.target.value)} />
          </Grid>
          <Grid item xs={3}>
            <TextField type="number" onFocus={()=>setB("")} value={b} label="enter width" variant="outlined" onChange={(e)=>setB(e.target.value)} />
          </Grid>
          <Grid item xs={3}>
         <TextField type="number" onFocus={()=>setLayer("")} variant="outlined" label="Number of Layers" value={layer} onChange={e=>setLayer(e.target.value)} />
          </Grid>
          <Grid item xs={3}>
          <TextField type="number" onFocus={()=>setPfc("")} variant="outlined" label="per Foot cost" value={pfc} onChange={e=>setPfc(e.target.value)} />
          </Grid>
          <Grid item xs={3}>
        <Button disabled={l<5 || b <5  || (layer <1 && layer >12) || pfc<1 } variant="contained" onClick={handleCalculate} >Calculate </Button>
          </Grid>
          <Grid item xs={3}>
        <Button  variant="contained" onClick={handleClear}>clear</Button>
          </Grid>
         <Grid item xs={6}>
          <Card>
            <CardContent> <h1> Rs. {cal}/- </h1> </CardContent>
          </Card>
          </Grid> 
      </Grid>
        </React.Fragment>
    )
}