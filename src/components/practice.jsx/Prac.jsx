import React from "react";
import { Counter } from "./Counter";
import { Todo } from "./Todo";
import { Wishlist } from "./Wishlist";

export const Prac=()=>{
    return(
        <React.Fragment>
            <Wishlist/>
            {/* <Counter/> */}
            <Todo/>
        </React.Fragment>
    )
}