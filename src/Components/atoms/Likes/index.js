import React from "react";
import { $Likes } from "./style";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Likes(props){
    return (
        <$Likes>
            <FontAwesomeIcon icon={faThumbsUp}/>
            <p>{props.likesNum}</p>
        </$Likes>
    );
};