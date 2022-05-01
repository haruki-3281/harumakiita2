import React from "react";
import $ContentContainer from "./style";
import LeftSideContainer from "../LeftSideContainer";
import ArticleList from "../ArticleList";
import RightSideContainer from "../RightSideContainer";

export default function ContentContainer(){
    return (
        <$ContentContainer>
            <LeftSideContainer />
            <ArticleList />
            <RightSideContainer />
        </$ContentContainer>
    );
};