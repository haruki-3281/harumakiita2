import React from "react";
import $HeaderContainer from "./style";
import Navigator from "../Navigator";
import Header from "../Header";

export default function HeaderContainer(props){
    return (
        <$HeaderContainer>
            <Header title={props.title} />
            <Navigator />
        </$HeaderContainer>
    );
};