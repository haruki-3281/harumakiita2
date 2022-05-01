import React from 'react'
import $SignupButton from './style'

type typeProps = {
    className: string
    href: string
}

export default function SignupButton(props: typeProps) {
    const { className, href } = props

    return (
        <$SignupButton className={className} href={href}>
            ユーザー登録
        </$SignupButton>
    )
}
