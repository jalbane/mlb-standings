import React from 'react';

import {FranchiseInfo} from '../containers/Main'

function DisplayTeam({team, wins, losses, pct, gamesBack, streak}: FranchiseInfo){

    return (
        <tr>
            <td>{team}</td>
            <td>{wins}</td>
            <td>{losses}</td>
            <td>{pct.toFixed(3)}</td>
            <td>{gamesBack < 0.5 ? '-' : gamesBack.toFixed(1) }</td>
            <td>{streak}</td>
        </tr>
        )
}

export default DisplayTeam;