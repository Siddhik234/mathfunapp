import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Numbercomp } from "./Numbercomp";
import { Table } from "./Table";
import { Square } from "./Square";
import { Numsquare } from "./Numsquare";
import { Topnav } from "./Topnav";
import { Numadd } from "./Numadd";
import { Geo } from "./Geo";
import { Todos } from "./Geo/Todos";
import { Prac } from "./practice.jsx/Prac";
import { Smartyshop } from "./Smartyshop";
import { Myconnect } from "./Todos/Myconnect";
import {Mycricchild} from "./Todos/myconnect/Mycricchild";



export const Home=()=>{
    return(
       <React.Fragment>
         <BrowserRouter>
         <Topnav/>
         <Routes>
            <Route path="/number" element={<Numbercomp/>} />
            <Route path="/table" element={<Table/>} />
            <Route path="/square" element={<Square/>} />
            <Route path="/Numsquare" element={<Numsquare/>} />
            <Route path="/Numadd" element={<Numadd/>} />
            <Route path="/geo" element={ <Geo/> } />
            {/* <Route path="/todos" element={<Todos/>} /> */}
            <Route path="/pra" element={<Prac/>} />
            <Route path="/smartyshop" element={<Smartyshop/>} />
            <Route path="/myconnect" element={<Myconnect/>} />
            <Route path="/childcric" element={<Mycricchild/>} />
         </Routes>
         </BrowserRouter>

           
       </React.Fragment>
    )
}