import React from "react";
import $HeaderContainer from "./style";
import Navigator from "../Navigator";
import Header from "../Header";

export default function HeaderContainer(props:{title:string;}){
    const { title } = props;
    
    return (
        <$HeaderContainer>
            <Header title={title} />
            <Navigator />
        </$HeaderContainer>
    );
};