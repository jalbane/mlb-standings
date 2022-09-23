import React from 'react';
import { Link } from 'react-router-dom';

function CompletedGames( {props} ){
    let [formatDate, ...rest] = props.date.split('T')[0].split('-')
    return (
        <div className = "game-container">
            <div className = "stadium-date-container">   
                <div> {props.stadium} </div>
                <Link to={`/game/${props.id}`}><div className='date-link'> {rest.join('/').concat('/', formatDate)} </div></Link>
            </div>
            <div className = "info-container"> 
                <div className="left"> {props.winner}</div>
                <div> vs </div>
                <div className="right"> {props.loser}  </div> 
            </div>
            <div className = "info-container">
                <div className="left"> {props.winnerRuns} </div> 
                <div> - </div>
                <div className="right"> {props.loserRuns} </div>
            </div>
        </div>
    )
}

export default CompletedGames;

/**/