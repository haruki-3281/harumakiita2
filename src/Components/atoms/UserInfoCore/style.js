import styled from "styled-components";

export const $UserInfoCore = styled.div`
    position:relative;

    .userName {
        text-decoration:${(hover)=>hover.hover ? "underline" : "none"}
    }

    display:flex;
    align-items:center;
`;