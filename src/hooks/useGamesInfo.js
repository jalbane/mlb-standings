import React from 'react'
import axios from 'axios'

const useGamesInfo = () => {
    const [completeGameRecap, setCompleteGameRecap] = React.useState()
    const [gameData, setGameData] = React.useState()
    const [loading, setLoading] = React.useState(true)
    const [pageNumber, setPageNumber] = React.useState(0)
    let maxPages = React.useRef(null)
    // React.useEffect(() => {
    //     let results = []
    //     fetch(`https://api-mlb.herokuapp.com/regular-season/page?number=${pageNumber}`, {
    //         method: 'GET',
    //         accept: "*/*"
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             results = data.result.map((item, index) => {
    //                 return {
    //                     key: index,
    //                     date: item.date,
    //                     stadium: item.stadium,
    //                     winner: item.winner.name,
    //                     winnerRuns: item.winner.runs,
    //                     loser: item.loser.name,
    //                     loserRuns: item.loser.runs
    //                 }
    //             })
    //             maxPages.current = data.pages
    //             setCompleteGameRecap(Array.from(results))
    //             setLegend(Array.from(results))
    //             setLoading(false)
    //         })
    // }, [pageNumber])
    React.useEffect(() => {
        const controller = new AbortController()
        const fetchService = async () => {    
            console.log(loading)    
            setLoading(true)
            try {
                const response = await axios.get(
                    `https://api-mlb.herokuapp.com/regular-season/page?number=${pageNumber}`,
                    { signal: controller.signal }
                )
                if (response.status === 200) {
                    setGameData(response)
                    setLoading(false)
                }
            } catch (e) {
                console.warn(`Error caught fetching game final scores: ${e}`)
            }
        }

        fetchService()
        //useEffect cleanup function
        return () => {
            controller.abort()
        }
    }, [pageNumber])

    // const handleSearch = e => {
    //     if (e.target.value) {
    //         let tempData = legend.filter(item => {
    //             if (
    //                 item.winner.toLowerCase().includes(e.target.value.toLowerCase()) ||
    //                 item.loser.toLowerCase().includes(e.target.value.toLowerCase()) ||
    //                 item.stadium.toLowerCase().includes(e.target.value.toLowerCase()) ||
    //                 item.date.toLowerCase().includes(e.target.value.toLowerCase())
    //             )
    //                 return item
    //             else return null
    //         })
    //         return setCompleteGameRecap(tempData)
    //     }

    //     return setCompleteGameRecap(legend)
    // }
    return { loading, setPageNumber }
}

export default useGamesInfo
