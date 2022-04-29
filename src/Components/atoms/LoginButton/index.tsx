import React from "react";
import $LoginButton from "./style";

type typeProps = {
    className:string;
    href:string;
};

export default function LoginButton(props: typeProps){
    const { className,href } = props;

    return(
        <$LoginButton 
            className={className}
            href={href}
        >
            ログイン
        </$LoginButton>
    );
};