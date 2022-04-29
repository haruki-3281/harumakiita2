import styled from "styled-components";

export const $Title = styled.h2`
    color:${(hover) => {
        return hover.hover ? "seagreen" : "black"
    } };
    margin-top:4px;
    margin-bottom:4px;
    font-size:1rem;
`;