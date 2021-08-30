
import React, {useState, useEffect} from 'react';
import CompletedGames from './CompletedGames';

function Games(){
    const [completeGameRecap, setCompleteGameRecap] = useState()
    const [filteredGameRecap, setFilteredGameRecap] = useState()
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        let results = []
        fetch(`https://api-mlb.herokuapp.com/regular-season`, {
            method: 'GET',
            accept: "*/*"
        })
        .then(res => res.json())
        .then(data => {
            results = data.map( (item)=> <CompletedGames 
                key = {item._id}
                date = {item.date}
                stadium = {item.stadium}
                winner = {item.winner.name}
                winnerRuns = {item.winner.runs}
                loser = {item.loser.name}
                loserRuns = {item.loser.runs}
            />)
            setCompleteGameRecap(Array.from(results))
            setLoading(false)
            
        })
        
    },[])

    const handleSearch = (e) => {
        setFilteredGameRecap(completeGameRecap)
        let [date, stadium, winner, winnerRuns, loser, loserRuns] = Object.keys(completeGameRecap[0].props)
        let tempData = completeGameRecap.filter( item => {
            if (item.props[winner].toLowerCase().includes(e.target.value.toLowerCase()) 
                || item.props[loser].toLowerCase().includes(e.target.value.toLowerCase())
                || item.props[date].includes(e.target.value.toLowerCase())
                || item.props[stadium].toLowerCase().includes(e.target.value.toLowerCase())
            ){
                return (
                    <CompletedGames 
                        key = {item.key}
                        date = {item.props.date}
                        stadium = {item.props.stadium}
                        winner = {item.props.winner.name}
                        winnerRuns = {item.props.winner.runs}
                        loser = {item.props.loser.name}
                        loserRuns = {item.props.loser.runs}/>
                )
            }
        })
        setFilteredGameRecap(tempData)
    }

    return(
        <div>
            {loading
                ?<div> loading </div> 
                : filteredGameRecap 
                    
                    ?    
                    <div >   
                        <input onChange = {handleSearch} placeholder="Search for Teams, Stadiums or dates (mm-dd)"/>
                        <div className = "layout-container"> 
                            {filteredGameRecap} 
                        </div> 
                    </div>
                    :
                    <div >   
                        <input onChange = {handleSearch} placeholder="Search for Teams, Stadiums or dates (mm-dd)"/>
                        <div className = "layout-container"> 
                            {completeGameRecap} 
                        </div> 
                    </div>
            }
        </div>
    )
}

export default Games;