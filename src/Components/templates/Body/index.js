import React,{ useState,useEffect } from "react";
import $Body from "./style";
import HeaderContainer from "../../organisms/HeaderContainer";
import ContentContainer from "../../organisms/ContentContainer";

export default function Body(props){
    return (
        <$Body>
            <HeaderContainer title={props.title}/>
            <ContentContainer />
        </$Body>
    );
};