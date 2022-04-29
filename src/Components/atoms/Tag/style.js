import styled from "styled-components";

export const $Tag = styled.p`
    text-decoration: ${(hover)=>{
        return hover.hover ? "underline" : "none";
    }}
`;