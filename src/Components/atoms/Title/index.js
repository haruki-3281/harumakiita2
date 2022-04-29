import React from "react";
import { $Title } from "./style";

export default function Title(props){
    return (
        <$Title hover={props.hover}>
            {props.title}
        </$Title>
    );
};