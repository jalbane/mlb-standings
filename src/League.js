import React,{useState, useEffect} from 'react';
import Team from './components/Team';
import { AiFillCaretUp, AiFillCaretDown} from "react-icons/ai";
import Loader from 'react-loader-spinner';

function League(props){
    const [teams, setTeams] = useState([])
    const [sortUp, setSortDirection] = useState({
        pct: true,
        gamesBack: true,
        wins: true,
        losses: true,
        team: false
    })
    const [loading, setLoading] = useState(true)
    useEffect( () => {
        fetch(`https://api-mlb.herokuapp.com/league/${props.league}`, {
            method: 'GET',
            accept: "*/*"
        })
        .then(res => res.json())
        .then(data => {
            let results = data.map(  (item) => 
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
        setTeams(results)
        setLoading(false)
        })
    },[])
    
    function reorganize(key){
        let state = [...teams]
        state = state.sort( (a,b) => {
            if (sortUp[`${key}`]){
                return b.props[`${key}`] - a.props[`${key}`] 
            }
            else{
                return a.props[`${key}`] - b.props[`${key}`]
            }
        })
        let value
        if (key === "pct"){
            value = sortUp[`${key}`]
            setSortDirection( (prevState)=> ({
                ...prevState,
                pct: !value
            }))
        }
        if (key === "gamesBack"){
            value = sortUp[`${key}`]
            setSortDirection( (prevState)=> ({
                ...prevState,
                gamesBack: !value
            }))
        }
        if (key === "wins"){
            value = sortUp[`${key}`]
            setSortDirection( (prevState)=> ({
                ...prevState,
                wins: !value
            }))
        }
        if (key === "losses"){
            value = sortUp[`${key}`]
            setSortDirection( (prevState)=> ({
                ...prevState,
                losses: !value
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
        setTeams(state)

    }

    function reorganizeAlpha(){
        let state = [...teams]
        state = state.sort( (a,b) => {
            if (sortUp.team){
                return a.props.team.localeCompare(b.props.team)
            }else{
                return b.props.team.localeCompare(a.props.team)
            }
        })
        let value = sortUp.team
        setSortDirection(prevState => ({
            ...prevState,
            team: !value 
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
        setTeams(state)
    }

    return( 
        <div> 
            {loading ? <div style={{marginBottom: '15%'}}> Loading <Loader type="Revolvingdots" height={40}/></div>
            :<table>
                <thead><tr>{props.league === 0 ? <th colspan="7">American League</th>: <th colspan="7">National League</th>}</tr></thead>
                <tbody>
                    <tr>
                        <td> Team <button onClick={reorganizeAlpha}>{sortUp.team ? <AiFillCaretUp />: <AiFillCaretDown />  } </button></td>
                        <td>Record</td>
                        <td>Wins <button onClick ={() => reorganize("wins")}> {sortUp.wins ? <AiFillCaretUp />: <AiFillCaretDown />  }</button></td>
                        <td>Losses <button onClick ={() => reorganize("losses")}> {sortUp.losses ? <AiFillCaretUp />: <AiFillCaretDown />  }</button></td>
                        <td>Win % <button onClick ={() => reorganize("pct")}> {sortUp.pct ? <AiFillCaretUp />: <AiFillCaretDown />  }</button></td>
                        <td>Games Back <button onClick ={() => reorganize("gamesBack")}> {sortUp.gamesBack ? <AiFillCaretUp />: <AiFillCaretDown />  }</button> </td>
                        <td>Streak</td>
                    </tr>
                    {teams}
                </tbody>
            </table>}   
        </div>
    )
}

export default League;