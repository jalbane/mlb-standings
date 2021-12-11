import React from 'react';

function CompletedGames( {props} ){
    let [formatDate, ...rest] = props.date.split('T')[0].split('-')

    return (
        <div className = "game-container">
            <div className = "stadium-date-container">   
                <div> {props.stadium} </div>
                <div> {rest.join('/').concat('/', formatDate)} </div>
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