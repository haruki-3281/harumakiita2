import React from 'react'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $Likes from './style'

type obj = {
    likesNum: number
}

export default function Likes(props: obj) {
    const { likesNum } = props

    return (
        <$Likes>
            <FontAwesomeIcon icon={faThumbsUp} />
            <p>{likesNum}</p>
        </$Likes>
    )
}
