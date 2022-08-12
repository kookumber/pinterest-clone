import { useEffect, useState } from "react";
import axios from "axios";

export default function usePinSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [pins, setPins] = useState([])
    const [hasMore, setHasMore] = useState(false)


    useEffect(() => {
        setLoading(true)
        setError(false)

        let cancel
        axios({
            method: 'GET',
            url: '/api/pins',
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken((c) => cancel = c)})
                .then(res => {
                    setPins(prevPins => {
                        return [...new Set([...prevPins, Object.values(res.data).map(p => p.title)])]
                    })
                    setHasMore(Object.values(res.data).length > 0)
                    setLoading(false)
                })
                .catch(e => {
                    if (axios.isCancel(e)) return
                    setError(true)
                })
            return () => cancel()
    }, [query, pageNumber])

    return { loading, error, pins, hasMore }
}