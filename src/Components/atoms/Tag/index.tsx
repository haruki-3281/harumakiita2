import React,{ useState } from "react";
import $Tag from "./style";

type typeProps = {
    tagName:string;
    last:boolean;
};

export default function Tag(props: typeProps){
    const { tagName,last } = props;
    const [_hover,setHover] = useState(false);

    return(
        <$Tag
            hover={_hover}
            onMouseOver={()=>setHover(true)}
            onMouseOut ={()=>setHover(false)}
        >
            {tagName}
            {last && ","}
        </$Tag>
    );
};