import React from "react";
import { $Header, $HeaderItems, $HeaderItemsContainer, $HeaderTitle, $LoginButton, $SearchInput, $SignupButton } from "./style";

export default function Header(props:{title:string;}) {
  const { title } = props;

  return (
    <$Header>
      <$HeaderItemsContainer>
        <$HeaderTitle
          className=""
          title={title}
          href="http://localhost:8080"
        />
        <$HeaderItems>
          <$SearchInput className="" />
          <$LoginButton
            className=""
            href="https://www.yahoo.co.jp"
          />
          <$SignupButton
            className=""
            href="https://www.yahoo.co.jp"
          />
        </$HeaderItems>
      </$HeaderItemsContainer>
    </$Header>
  );
};
