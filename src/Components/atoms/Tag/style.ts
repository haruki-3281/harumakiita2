import styled from "styled-components";

const $Tag = styled.p`
    text-decoration: ${(hover:{hover:boolean})=> hover.hover ? "underline" : "none"}
`;

export default $Tag;
