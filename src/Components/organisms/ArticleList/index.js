import React from "react";
import $ArticleList from "./style";
import Article from "../Article";
import { useGetArticle } from "../../../hooks";

const api = "dummy.json";

export default function ArticleList() {
  const list = useGetArticle();

  return (
    <$ArticleList>
      {list.map((item, index) => {
        return <Article key={index} data={item} />;
      })}
    </$ArticleList>
  );
}