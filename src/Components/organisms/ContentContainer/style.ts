import styled from 'styled-components'

const $ContentContainer = styled.div`
    position: relative;

    display: grid;
    height: 100%;
    width: calc(100% - 64px);
    max-width: 1600px;
    margin: 0 auto;

    grid-template-columns: 250px 1fr 300px;

    grid-row: 2 / 3;
    padding-top: 3rem;

    @media screen and (max-width: 480px) {
        grid-template-columns: 0px 1fr 0px;
    } ;
`

export default $ContentContainer
