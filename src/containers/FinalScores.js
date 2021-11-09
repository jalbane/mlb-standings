
import React, {useState, useEffect, useRef} from 'react';
import DisplayGame from '../components/DisplayGame';

function FinalScores(){
    const [completeGameRecap, setCompleteGameRecap] = useState()
    const [loading, setLoading] = useState(true)
    const [legend, setLegend] = useState()
    const [pageNumber, setPageNumber] = useState(0)
    let maxPages = useRef(null)
    useEffect( () => {
        let results = []
        fetch(`https://api-mlb.herokuapp.com/regular-season/page?number=${pageNumber}`, {
            method: 'GET',
            accept: "*/*"
        })
        .then(res => res.json())
        .then(data => {
            results = data.result.map( (item, index)=> {return {
                key: index,
                date: item.date,
                stadium: item.stadium,
                winner: item.winner.name,
                winnerRuns: item.winner.runs,
                loser: item.loser.name,
                loserRuns: item.loser.runs
            }
            })
            maxPages.current = data.pages
            setCompleteGameRecap(Array.from(results))
            setLegend(Array.from(results))
            setLoading(false)
        })
    },[pageNumber])

    const handleSearch = (e) => {
        if (e.target.value !== ""){
            let tempData = legend.filter( (item, index) => {
            if (item.winner.toLowerCase().includes(e.target.value.toLowerCase()) 
                || item.loser.toLowerCase().includes(e.target.value.toLowerCase())
                || item.stadium.toLowerCase().includes(e.target.value.toLowerCase())
                || item.date.toLowerCase().includes(e.target.value.toLowerCase())
            ){
                return {
                        key: index,
                        date: item.date,
                        stadium: item.stadium,
                        winner: item.winner.name,
                        winnerRuns: item.winner.runs,
                        loser: item.loser.name,
                        loserRuns: item.loser.runs
                }
            }
            })
            return setCompleteGameRecap(tempData)
        }
        else 
            return setCompleteGameRecap(legend)
        
    }

    return(
        <div>
            { loading
                ? <div> loading </div> 
                : 
                    <div >   
                        <input onChange = {handleSearch} placeholder="Search for Teams, Stadiums or dates (mm-dd)"/>
                        <div>
                            <button onClick={() => pageNumber ? setPageNumber(  prevState => prevState - 1 ): 0 }> <strong> Go back </strong> </button>
                            <div style={{display: 'inline-block', paddingLeft: "75px", paddingRight: "75px"}}> Page {pageNumber + 1} out of {maxPages.current + 1} </div>
                            <button onClick={() => pageNumber === maxPages.current? null : setPageNumber(prevState => prevState + 1)}> <strong> Next page </strong> </button>
                        </div>
                        <div className = "layout-container"> 
                            {completeGameRecap.map( (item, index) => <DisplayGame key={index} props={item} /> ) }
                        </div> 
                    </div>
            }
            
            
        </div>
    )
}

export default FinalScores;