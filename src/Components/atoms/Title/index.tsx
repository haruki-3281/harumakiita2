import React from 'react'
import $Title from './style'

export default function Title(props: { hover: boolean; title: string }) {
    const { hover, title } = props

    return <$Title hover={hover}>{title}</$Title>
}
