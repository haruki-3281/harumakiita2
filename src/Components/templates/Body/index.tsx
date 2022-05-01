import React from 'react'
import $Body from './style'
import HeaderContainer from '../../organisms/HeaderContainer'
import ContentContainer from '../../organisms/ContentContainer'

export default function Body(props: { title: string }) {
    const { title } = props

    return (
        <$Body>
            <HeaderContainer title={title} />
            <ContentContainer />
        </$Body>
    )
}
