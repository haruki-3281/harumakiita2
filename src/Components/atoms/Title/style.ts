import styled from 'styled-components'

const $Title = styled.h2`
    color: ${(hover: { hover: boolean }) =>
        hover.hover ? 'seagreen' : 'black'};
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 1rem;
`

export default $Title
