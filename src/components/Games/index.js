import React from "react";
import {FinalScores} from '../index'
import useGamesInfo from "../../hooks/useGamesInfo";

const Games = () => {
    const {loading, setPageNumber } = useGamesInfo()
    return (<>
        Game final scores
        { loading ? console.log('loading') : console.log('cleanup/done loading') }
        <FinalScores>
            asdf
        </FinalScores>
        <button onClick={() => setPageNumber(prev => ++prev)}>unmount</button>
    </>)
}

export default Games