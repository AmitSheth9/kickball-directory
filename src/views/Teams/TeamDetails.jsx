import React, {useState, useEffect} from 'react'
import { getTeamById } from '../../services/teams'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'

export default function TeamDetails() {
    const [team, setTeam] = useState([]);
    const {id} = useParams();
    console.log(id);
    useEffect(() => {
    async function getTeamEffect() {
    const storeTeam = await getTeamById(id);
    console.log(storeTeam);
    setTeam(storeTeam);

}
getTeamEffect()}, [id])

    return (
        <div>
         <p>{team.name}</p>
         <p>{team.city}, {team.state}</p>
         <p>{team.name}</p>   
        <div> {team.players ? team.players.map((player => {
             return (
                 <Link to={`/players/${player.id}`}>
                 <p key ={player.id}>{player.name}</p>
                 </Link>
                 )}
                 )) : ''}
                 </div>   
        </div>
    )
}
