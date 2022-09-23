import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const GameDetails = () => {
    const {id} = useParams()
    const [game, setGame] = React.useState()
    console.log(game)
    React.useEffect(() => {
        const fetchData = async () => {
            console.log('asdfasdf')
            const response = await axios.get( `http://localhost:8000/regular-season/gameId?game=${id}`)
            setGame(response.data.db[0])

        }
        fetchData()
    }, [])

    return (
        <> 
            <pre style={{textAlign: "left"}}>{JSON.stringify(game, null, 5)}</pre>
        </>
    )
}

export default GameDetails