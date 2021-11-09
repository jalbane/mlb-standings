import React from 'react';

function CompletedGames( {props} ){
    let [formatDate, ...rest] = props.date.split('T')[0].split('-')

    return (
        <div className = "game-container">
            <div className = "stadium-date-container">   
                <div> {props.stadium} </div>
                <div> {rest.join('/').concat('/', formatDate)} </div>
            </div>
            <div className = "winner-container"> 
                <strong> {props.winner} 
                    <div> {props.winnerRuns} </div>
                </strong>
            </div>
            <div className = "loser-container"> {props.loser} 
                <div> {props.loserRuns} </div>
            </div>
        </div>
    )
}

export default CompletedGames;

/**/