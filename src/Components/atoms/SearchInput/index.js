import React from "react";
import { $SearchIcon,$SearchInput } from "./style";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchInput(props){
    return(
        <$SearchInput className={props.className}>
            <$SearchIcon className="searchIcon">
                <FontAwesomeIcon icon={faSearch} />
            </$SearchIcon>
            <input placeholder="キーワードを入力" />
        </$SearchInput>
    );
};