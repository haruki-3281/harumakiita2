import React from 'react'
import $HeaderTitle from './style'

type obj = {
    className: string
    href: string
    title: string
}

export default function HeaderTitle(props: obj) {
    const { className, href, title } = props

    return (
        <$HeaderTitle className={className}>
            <a href={href}>{title}</a>
        </$HeaderTitle>
    )
}
