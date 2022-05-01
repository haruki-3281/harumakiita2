import React, { useState } from 'react'
import $UserInfoCore from './style'
import UserIcon from '../UserIcon'

type typeProps = {
    profile_image_url: string
    userName: string
}

export default function UserInfoCore(props: typeProps) {
    const { profile_image_url, userName } = props
    const [hover, setHover] = useState(false)

    return (
        <$UserInfoCore
            hover={hover}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <UserIcon profile_image_url={profile_image_url} hover={hover} />
            <p className="userName">@{userName}</p>
        </$UserInfoCore>
    )
}
