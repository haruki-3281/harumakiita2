import React,{ useState,useEffect } from "react";
import { $LoginButton } from "./style";

export default function LoginButton(props){
    return(
        <$LoginButton 
            className={props.className}
            href={props.href}
        >
            {"ログイン"}
        </$LoginButton>
    );
};