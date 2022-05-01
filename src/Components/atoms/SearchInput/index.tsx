import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { $SearchIcon,$SearchInput } from "./style";

type typeProps = {
    className:string;
};

export default function SearchInput(props: typeProps){
    const { className } = props;

    return(
        <$SearchInput className={className}>
            <$SearchIcon className="searchIcon">
                <FontAwesomeIcon icon={faSearch} />
            </$SearchIcon>
            <input placeholder="キーワードを入力" />
        </$SearchInput>
    );
};