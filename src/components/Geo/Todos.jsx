import React from "react";
import { Dishlist } from "../Todos/Dishlist";
import { TaskList } from "../Todos/TaskList";
import { Techlist } from "../Todos/Techlist";

export const Todos=()=>{
    return(
        <React.Fragment>
            <h1>Todos List</h1>
            <Dishlist/>
            <Techlist/>
        <TaskList/>
        </React.Fragment>
    )
}