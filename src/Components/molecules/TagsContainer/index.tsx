import React from 'react'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $TagsContainer from './style'
import Tag from '../../atoms/Tag'

type typeProps = {
    tags: []
}

export default function TagsContainer(props: typeProps) {
    const { tags } = props

    const tagLength = tags.length
    type typeData = {
        id: string
        name: string
    }

    const tagElements = tags.map((data: typeData, index: number) => (
        <Tag key={data.id} tagName={data.name} last={tagLength === index + 1} />
    ))

    return (
        <$TagsContainer>
            <FontAwesomeIcon icon={faTags} />
            {tagElements}
        </$TagsContainer>
    )
}
