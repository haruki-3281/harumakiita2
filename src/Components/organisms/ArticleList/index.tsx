import React from 'react'
import $ArticleList from './style'
import Article from '../Article'
import useGetArticle from '../../../hooks/qiita'

export default function ArticleList() {
    const list = useGetArticle()

    return (
        <$ArticleList>
            {list.map((item: typeArticle) => (
                <Article key={item.id} data={item} />
            ))}
        </$ArticleList>
    )
}
