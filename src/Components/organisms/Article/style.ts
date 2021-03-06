import styled from 'styled-components'

const $Article = styled.div`
    position: relative;
    width: 100%;

    cursor: pointer;
    padding: 0.5rem 1.5rem;
    margin-bottom: 1rem;

    background: white;

    box-sizing: border-box;

    > div {
        margin-top: 0.5rem;
    }

    p {
        margin: 0;
        margin-left: 0.5rem;
        font-size: 0.85rem;
    }

    @media screen and (max-width: 480px) {
        padding: 0.5rem;
    }
`

export default $Article
