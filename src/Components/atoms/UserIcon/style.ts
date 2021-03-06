import styled from 'styled-components'

const $UserIcon = styled.div`
    position: relative;
    overflow: hidden;

    border-radius: 1rem;

    width: 1.5rem;
    height: 1.5rem;

    .cover {
        position: absolute;
        border-radius: 1rem;

        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.25);

        display: ${(hover: { hover: boolean }) =>
            hover.hover ? 'block' : 'none'};
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;

        width: 100%;
        height: 100%;
    }
`

export default $UserIcon
