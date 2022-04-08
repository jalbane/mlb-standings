import React, { useState, useEffect } from 'react'
import DisplayTeam from '../components/DisplayTeam'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import YearSelection from '../components/YearSelection/YearSelection'
import axios from 'axios'

const Wrapper = styled.div`
    margin: 0 auto;
    padding-top: 1%;
    padding-bottom: 1%;

    & table {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    & table:nth-child(2) {
        margin-top: 1%;
    }

    & table > thead > tr > th {
        background-color: #bf0d3e;
        color: white;
        padding-left: 25px;
    }

    & table:nth-child(2) > thead > tr > th {
        background-color: #041e42;
    }
`

function Main() {
    const [teams, setTeams] = useState({
        american: [],
        national: []
    })
    const [sortDirection, setSortDirection] = useState({
        american: {
            pct: true,
            gamesBack: true,
            wins: true,
            losses: true,
            team: false
        },
        national: {
            pct: true,
            gamesBack: true,
            wins: true,
            losses: true,
            team: false
        }
    })
    const [loading, setLoading] = useState(true)
    const [queryYear, setQueryYear] = useState(new Date().getFullYear())
    useEffect(() => {
        let results
        const controller = new AbortController()

        /* `https://api-mlb.herokuapp.com/` */
        // fetch(`https://api-mlb.herokuapp.com/?season=${queryYear}`, {
        //     method: 'GET'
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        //     results = data.map(  (item) =>
        //         <DisplayTeam
        //             key = {item.teamId}
        //             teamId = {item.teamId}
        //             team = {item.team}
        //             league = {item.league}
        //             record = {item.record}
        //             wins = {item.wins}
        //             losses = {item.losses}
        //             pct = {item.pct}
        //             gamesBack = {item.gamesBack}
        //             streak = {item.streak}
        //         />)
        //     results = results.sort( (a,b) => {return a.props.league - b.props.league} )
        //     let resultsAmerican = results.slice(0, 15)
        //     let resultsNational = results.slice(-15)
        //     setTeams({
        //         american: resultsAmerican,
        //         national: resultsNational
        //     })
        //     setLoading(false)
        // })
        // .catch(err => {
        //     if (err){
        //         setLoading(false)
        //     }
        // })

        const fetchTeams = async () => {
            setLoading(true)
            const response = await axios.get(`https://api-mlb.herokuapp.com/?season=${queryYear}`, {
                signal: controller.signal
            })
            if (response.status === 200) {
                results = response.data.map(item => (
                    <DisplayTeam
                        key={item.teamId}
                        teamId={item.teamId}
                        team={item.team}
                        league={item.league}
                        record={item.record}
                        wins={item.wins}
                        losses={item.losses}
                        pct={item.pct}
                        gamesBack={item.gamesBack}
                        streak={item.streak}
                    />
                ))
                results = results.sort((a, b) => {
                    return a.props.league - b.props.league
                })
                let resultsAmerican = results.slice(0, 15)
                let resultsNational = results.slice(-15)
                setTeams({
                    american: resultsAmerican,
                    national: resultsNational
                })
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        fetchTeams()

        return () => {
            controller.abort()
        }
    }, [queryYear])

    function mapTeamState(state, league) {
        state = state.map(item => (
            <DisplayTeam
                key={item.props.teamId}
                teamId={item.props.teamId}
                team={item.props.team}
                league={item.props.league}
                record={item.props.record}
                wins={item.props.wins}
                losses={item.props.losses}
                pct={item.props.pct}
                gamesBack={item.props.gamesBack}
                streak={item.props.streak}
            />
        ))
        if (league === 'american') {
            setTeams(prevState => ({
                ...prevState,
                american: state
            }))
        }
        if (league === 'national') {
            setTeams(prevState => ({
                ...prevState,
                national: state
            }))
        }
    }

    /**
     * reorganizeWins handles sorting for # of wins and win percentage,
     * because they are closely related. Also sorting wins in descending order
     * will toggle the state for # of losses to display in ascending order.
     * @param {*} league -- string for either american or national league
     */
    function reorganizeWins(league) {
        let state = [...teams[`${league}`]]
        state = state.sort((a, b) => {
            return b.props.wins - a.props.wins
        })
        if (!sortDirection[`${league}`].wins) state.reverse()

        setSortDirection(prevState => ({
            ...prevState,
            [`${league}`]: {
                ...prevState[`${league}`],
                wins: !prevState[`${league}`].wins,
                losses: !prevState[`${league}`].losses,
                gamesBack: !prevState[`${league}`].gamesBack
            }
        }))

        mapTeamState(state, league)
    }

    function reorganizeLosses(league) {
        let state = [...teams[`${league}`]]
        state = state.sort((a, b) => {
            return b.props.losses - a.props.losses
        })
        if (!sortDirection[`${league}`].losses) state.reverse()

        setSortDirection(prevState => ({
            ...prevState,
            [`${league}`]: {
                ...prevState[`${league}`],
                losses: !prevState[`${league}`].losses,
                wins: prevState[`${league}`].losses,
                pct: prevState[`${league}`].losses
            }
        }))

        mapTeamState(state, league)
    }

    function reorganizeWinPercentage(league) {
        let state = [...teams[`${league}`]]
        state = state.sort((a, b) => {
            return b.props.pct - a.props.pct
        })
        if (!sortDirection[`${league}`].pct) state.reverse()

        setSortDirection(prevState => ({
            ...prevState,
            [`${league}`]: {
                ...prevState[`${league}`],
                pct: !prevState[`${league}`].pct,
                losses: !prevState[`${league}`].losses,
                gamesBack: !prevState[`${league}`].gamesBack
            }
        }))
        mapTeamState(state, league)
    }

    function reorganizeGamesBack(league) {
        let state = [...teams[`${league}`]]
        state = state.sort((a, b) => {
            return b.props.gamesBack - a.props.gamesBack
        })
        if (!sortDirection[`${league}`].gamesBack) state.reverse()

        setSortDirection(prevState => ({
            ...prevState,
            [`${league}`]: {
                ...prevState[`${league}`],
                gamesBack: !prevState[`${league}`].gamesBack,
                wins: prevState[`${league}`].gamesBack,
                pct: prevState[`${league}`].gamesBack
            }
        }))
        mapTeamState(state, league)
    }

    function reorganizeAlpha(league) {
        let state = [...teams[`${league}`]]
        state = state.sort((a, b) => {
            if (sortDirection[`${league}`].team) {
                return a.props.team.localeCompare(b.props.team)
            } else {
                return b.props.team.localeCompare(a.props.team)
            }
        })

        setSortDirection(prevState => ({
            ...prevState,
            [`${league}`]: {
                ...prevState[`${league}`],
                team: !prevState[`${league}`].team
            }
        }))

        mapTeamState(state, league)
    }

    return (
        <Wrapper>
            {loading ? (
                <div style={{ marginTop: '5%' }}>
                    {' '}
                    Loading <Loader color={'black'} height={60} />
                </div>
            ) : (
                <div>
                    <YearSelection setQueryYear={setQueryYear} />
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="6">American League</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Team
                                    <button onClick={() => reorganizeAlpha('american')}>
                                        {sortDirection.american.team ? (
                                            <AiFillCaretUp />
                                        ) : (
                                            <AiFillCaretDown />
                                        )}{' '}
                                    </button>
                                </td>
                                <td>
                                    Wins{' '}
                                    <button onClick={() => reorganizeWins('american')}>
                                        {' '}
                                        {sortDirection.american.wins ? (
                                            <AiFillCaretUp />
                                        ) : (
                                            <AiFillCaretDown />
                                        )}
                                    </button>
                                </td>
                                <td>
                                    Losses{' '}
                                    <button onClick={() => reorganizeLosses('american')}>
                                        {' '}
                                        {sortDirection.american.losses ? (
                                            <AiFillCaretUp />
                                        ) : (
                                            <AiFillCaretDown />
                                        )}
                                    </button>
                                </td>
                                <td>
                                    Win %{' '}
                                    <button onClick={() => reorganizeWinPercentage('american')}>
                                        {' '}
                                        {sortDirection.american.pct ? (
                                            <AiFillCaretUp />
                                        ) : (
                                            <AiFillCaretDown />
                                        )}
                                    </button>
                                </td>
                                <td>
                                    Games Back{' '}
                                    <button onClick={() => reorganizeGamesBack('american')}>
                                        {' '}
                                        {sortDirection.american.gamesBack ? (
                                            <AiFillCaretUp />
                                        ) : (
                                            <AiFillCaretDown />
                                        )}
                                    </button>{' '}
                                </td>
                                <td>Streak</td>
                            </tr>
                            {teams.american}
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="6">National League</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Team
                                    <button onClick={() => reorganizeAlpha('national')}>
                                        {sortDirection.national.team ? (
                                            <AiFillCaretUp />
                                        ) : (
                                            <AiFillCaretDown />
                                        )}{' '}
                                    </button>
                                </td>
                                <td>
                                    Wins{' '}
                                    <button onClick={() => reorganizeWins('national')}>
                                        {' '}
                                        {sortDirection.national.wins ? (
                                            <AiFillCaretUp />
                                        ) : (
                                            <AiFillCaretDown />
                                        )}
                                    </button>
                                </td>
                                <td>
                                    Losses{' '}
                                    <button onClick={() => reorganizeLosses('national')}>
                                        {' '}
                                        {sortDirection.national.losses ? (
                                            <AiFillCaretUp />
                                        ) : (
                                            <AiFillCaretDown />
                                        )}
                                    </button>
                                </td>
                                <td>
                                    Win %{' '}
                                    <button onClick={() => reorganizeWinPercentage('national')}>
                                        {' '}
                                        {sortDirection.national.pct ? (
                                            <AiFillCaretUp />
                                        ) : (
                                            <AiFillCaretDown />
                                        )}
                                    </button>
                                </td>
                                <td>
                                    Games Back{' '}
                                    <button onClick={() => reorganizeGamesBack('national')}>
                                        {' '}
                                        {sortDirection.national.gamesBack ? (
                                            <AiFillCaretUp />
                                        ) : (
                                            <AiFillCaretDown />
                                        )}
                                    </button>{' '}
                                </td>
                                <td>Streak</td>
                            </tr>
                            {teams.national}
                        </tbody>
                    </table>
                </div>
            )}
        </Wrapper>
    )
}

export default Main
