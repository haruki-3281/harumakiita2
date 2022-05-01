import React, { useState, useEffect } from 'react'
import $Article from './style'
import UserInfo from '../../molecules/UserInfo'
import Title from '../../atoms/Title'
import TagsContainer from '../../molecules/TagsContainer'
import Likes from '../../atoms/Likes'

type typeProps = {
    data: typeArticle
}

export default function Article(props: typeProps) {
    const { data } = props
    const { user, created_at, title, tags, likes_count } = data
    const [hover, setHover] = useState(false)

    useEffect(() => {
        console.log(data)
    }, [])

    return (
        <$Article
            className="article"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <UserInfo user={user} timestamp={created_at} />
            <Title title={title} hover={hover} />
            <TagsContainer tags={tags} />
            <Likes likesNum={likes_count} />
        </$Article>
    )
}
