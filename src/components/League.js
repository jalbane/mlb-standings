import React,{useState, useEffect} from 'react';
import Team from './Team';
import { AiFillCaretUp, AiFillCaretDown} from "react-icons/ai";
import Loader from 'react-loader-spinner';

function League(){
    const [teams, setTeams] = useState({
        american: [

        ],
        national: [

        ]
    })
    const [sortDirection, setSortDirection] = useState({
        american: {    
            pct: true,
            gamesBack: true,
            wins: false,
            losses: true,
            team: false
        },
        national: {    
            pct: true,
            gamesBack: true,
            wins: false,
            losses: true,
            team: false
        }

    })
    const [loading, setLoading] = useState(true)
    useEffect( () => {
        let results
        fetch(`https://api-mlb.herokuapp.com/`, {
            method: 'GET',
            accept: "*/*"
        })
        .then(res => res.json())
        .then(data => {
            results = data.map(  (item) => 
                <Team 
                    key = {item.teamId}
                    teamId = {item.teamId} 
                    team = {item.team} 
                    league = {item.league}
                    record = {item.summary.record}
                    wins = {item.summary.wins}
                    losses = {item.summary.losses}
                    pct = {item.summary.pct}
                    gamesBack = {item.summary.gamesBack}
                    streak = {item.summary.streak}
                />)
            results = results.sort( (a,b) => {return a.props.league - b.props.league} )
            let resultsAmerican = results.slice(0, 15)
            let resultsNational = results.slice(-15)
            setTeams({
                american: resultsAmerican,
                national: resultsNational
            })
            setLoading(false)
        })
    },[])
    
    function reorganize(key, league){
        let state = [...teams[`${league}`]]
        state = state.sort( (a,b) => {
            if (sortDirection[`${league}`].[`${key}`]){
                return b.props[`${key}`] - a.props[`${key}`] 
            }
            else{
                return a.props[`${key}`] - b.props[`${key}`]
            }
        })
        let value
        if (key === "pct"){
            value = sortDirection[`${league}`].pct
            setSortDirection( (prevState)=> ({
                ...prevState,
                [`${league}`]:
                {
                    ...prevState[`${league}`],
                    pct: !value
                }
            }))
        }
        if (key === "gamesBack"){
            value = sortDirection[`${league}`].gamesBack
            setSortDirection( (prevState)=> ({
                ...prevState,
                [`${league}`]:
                {
                    ...prevState[`${league}`],
                    gamesBack: !value
                }
            }))
        }
        if (key === "wins"){
            value = sortDirection[`${league}`].wins
            setSortDirection( (prevState)=> ({
                ...prevState,
                [`${league}`]:
                {
                    ...prevState[`${league}`],
                    wins: !value
                }
            }))
        }
        if (key === "losses"){
            value = sortDirection[`${league}`].losses
            setSortDirection( (prevState)=> ({
                ...prevState,
                [`${league}`]:
                {
                    ...prevState[`${league}`],
                    losses: !value
                }
            }))
        }
        state = state.map((item) => 
        <Team 
            key = {item.props.teamId}
            teamId = {item.props.teamId} 
            team = {item.props.team} 
            league = {item.props.league}
            record = {item.props.record}
            wins = {item.props.wins}
            losses = {item.props.losses}
            pct = {item.props.pct}
            gamesBack = {item.props.gamesBack}
            streak = {item.props.streak}
        />)
        if(league === 'american'){
            setTeams( (prevState) => ({
                ...prevState,
                american: state
            }))
        }
        if(league === 'national'){
            setTeams( (prevState) => ({
                ...prevState,
                national: state
            }))
        }
    }

    function reorganizeAlpha(league){
        let state = [...teams[`${league}`]]
        state = state.sort( (a,b) => {
            if (sortDirection[`${league}`].team){
                return a.props.team.localeCompare(b.props.team)
            }else{
                return b.props.team.localeCompare(a.props.team)
            }
        })
        let value = sortDirection[`${league}`].team

        setSortDirection( (prevState) => ({
            ...prevState,
            [`${league}`]:{
                pct: prevState,
                gamesBack: prevState,
                wins: prevState,
                losses: prevState,
                team: !value 
            }
        }))
        
        state = state.map((item) => 
        <Team 
            key = {item.props.teamId}
            teamId = {item.props.teamId} 
            team = {item.props.team} 
            league = {item.props.league}
            record = {item.props.record}
            wins = {item.props.wins}
            losses = {item.props.losses}
            pct = {item.props.pct}
            gamesBack = {item.props.gamesBack}
            streak = {item.props.streak}
        />)

        if(league === 'american'){
            setTeams( (prevState) => ({
                ...prevState,
                american: state
            }))
        }
        if(league === 'national'){
            setTeams( (prevState) => ({
                ...prevState,
                national: state
            }))
        }
    }

    return( 
        <div> 
            {loading 
            ? <div style={{marginTop: '5%'}}> Loading <Loader color={'black'} height={60}/></div>
            :
            <div>
                <table>
                    <thead><tr><th colSpan="7">American League</th></tr></thead>
                    <tbody>
                        <tr>
                            <td>Team<button onClick={() => reorganizeAlpha("american")}>{sortDirection.american.team ? <AiFillCaretUp />: <AiFillCaretDown />  } </button></td>
                            <td>Record</td>
                            <td>Wins <button onClick ={() => reorganize("wins", "american")}> {sortDirection.american.wins ? <AiFillCaretUp />: <AiFillCaretDown />  }</button></td>
                            <td>Losses <button onClick ={() => reorganize("losses", "american")}> {sortDirection.american.losses ? <AiFillCaretUp />: <AiFillCaretDown />  }</button></td>
                            <td>Win % <button onClick ={() => reorganize("pct", "american")}> {sortDirection.american.pct ? <AiFillCaretUp />: <AiFillCaretDown />  }</button></td>
                            <td>Games Back <button onClick ={() => reorganize("gamesBack", "american")}> {sortDirection.american.gamesBack ? <AiFillCaretUp />: <AiFillCaretDown />  }</button> </td>
                            <td>Streak</td>
                        </tr>
                        {teams.american}
                    </tbody>
                </table>
                <table>
                    <thead><tr><th colSpan="7">National League</th></tr></thead>
                    <tbody>
                        <tr>
                            <td>Team<button onClick={() => reorganizeAlpha("national")}>{sortDirection.national.team ? <AiFillCaretUp />: <AiFillCaretDown />  } </button></td>
                            <td>Record</td>
                            <td>Wins <button onClick ={() => reorganize("wins", "national")}> {sortDirection.national.wins ? <AiFillCaretUp />: <AiFillCaretDown />  }</button></td>
                            <td>Losses <button onClick ={() => reorganize("losses", "national")}> {sortDirection.national.losses ? <AiFillCaretUp />: <AiFillCaretDown />  }</button></td>
                            <td>Win % <button onClick ={() => reorganize("pct", "national")}> {sortDirection.national.pct ? <AiFillCaretUp />: <AiFillCaretDown />  }</button></td>
                            <td>Games Back <button onClick ={() => reorganize("gamesBack", "national")}> {sortDirection.national.gamesBack ? <AiFillCaretUp />: <AiFillCaretDown />  }</button> </td>
                            <td>Streak</td>
                        </tr>
                        {teams.national}
                    </tbody>
                </table>
            </div>
            }   
        </div>
    )
}

export default League;