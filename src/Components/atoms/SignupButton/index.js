import React from "react";
import { $SignupButton } from "./style";

export default function SignupButton(props){
    return(
        <$SignupButton 
            className={props.className}
            href={props.href}
        >
            {"ユーザー登録"}
        </$SignupButton>
    );
};