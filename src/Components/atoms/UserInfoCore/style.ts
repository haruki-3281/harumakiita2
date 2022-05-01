import styled from 'styled-components'

const $UserInfoCore = styled.div`
    position: relative;

    .userName {
        text-decoration: ${(hover: { hover: boolean }) =>
            hover.hover ? 'underline' : 'none'};
    }

    display: flex;
    align-items: center;
`

export default $UserInfoCore
