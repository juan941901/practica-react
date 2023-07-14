import React from "react";
import { ReactComponent as CheckSGVBlack } from "./check_black.svg";
import { ReactComponent as DeleteSGVBlack } from "./delete_black.svg";
import './TodoIcon.css';

const typeIcon = {

    "check":  (color)=> <CheckSGVBlack className="Icon-svg" fill={color}/>,
    "delete": (color)=> <DeleteSGVBlack className="Icon-svg" fill={color}/>

}

function TodoIcon({type,color,onClick}){

return (

    <span 
        className={`Icon-container Icon-container-${type}`}
        onClick = {onClick}
    >
        {typeIcon[type](color)} 
    </span>

)

}

export {TodoIcon};