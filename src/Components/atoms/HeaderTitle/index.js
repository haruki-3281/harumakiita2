import React from "react";
import { $HeaderTitle } from "./style";

export default function HeaderTitle(props) {
    return (
        <$HeaderTitle className={props.className}>
            <a href={props.href}>{props.title}</a>
        </$HeaderTitle>
    );
};