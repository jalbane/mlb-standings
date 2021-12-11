import React from 'react';

function DisplayTeam(props){

    let fixedGamesBack = props.gamesBack.toFixed(1)
    return (
        <tr>
            <td>{props.team}</td>
            <td>{props.wins}</td>
            <td>{props.losses}</td>
            <td>{props.pct.toFixed(3)}</td>
            <td>{fixedGamesBack < 0.5 ? '-' : fixedGamesBack }</td>
            <td>{props.streak}</td>
        </tr>
        )
}

export default DisplayTeam;