import { useState, useEffect } from 'react'

const api = 'dummy.json'

// カスタムフック
// use**で始める
const useGetArticle = () => {
    const [list, setList] = useState<typeArticle[]>([])

    async function setFetchData() {
        const res = await fetch(api, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }).catch(() => {
            throw new Error()
        })

        if (res instanceof Response) {
            const data: Array<typeArticle> = (await res.json().catch(() => {
                throw new Error()
            })) as Array<typeArticle>

            setList(data)
        }
    }

    useEffect(() => {
        setFetchData()
            .then(() => console.log())
            .catch((err) => console.log(err))
    }, [])

    return list
}

export default useGetArticle
