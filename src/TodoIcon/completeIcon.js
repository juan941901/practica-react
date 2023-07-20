import React from "react";
import {TodoIcon} from "./";

function CompleteIcon({completa,onComplete}){

    return (

        <TodoIcon
            type="check"
            color={completa ? "green" : "gray"}    
            onClick={onComplete}  
        />

    );

}

export {CompleteIcon};