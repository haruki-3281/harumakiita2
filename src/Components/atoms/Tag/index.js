import React,{ useState } from "react";
import { $Tag } from "./style";

export default function Tag(props){
    const [hover,setHover] = useState(false);

    return(
        <$Tag 
            hover={hover}
            onMouseOver={()=>setHover(true)}
            onMouseOut ={()=>setHover(false)}
        >
            {props.tagName}
            {!props.last && ","}
        </$Tag>
    );
};