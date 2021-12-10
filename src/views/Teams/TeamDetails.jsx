import React, {useState, useEffect} from 'react'
import { getTeamById } from '../../services/teams'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'

export default function TeamDetails() {
    const [team, setTeam] = useState();
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    console.log(id);
    useEffect(() => {
    async function getTeamEffect() {
    const storeTeam = await getTeamById(id);
    console.log(storeTeam);
    setTeam(storeTeam);
    setLoading(false);

}
getTeamEffect()}, [id])
    
if (loading) return <p>Loading team...</p>
    return (
        <div>
         <p>{team.name}</p>
         <p>{team.city}, {team.state}</p>  
        <div> {team.players ? team.players.map((player => {
             return (
                <div key={player.id}> 
                 <Link to={`/players/${player.id}`}>
                 <p key ={player.id}>{player.name}</p>
                 </Link>
                 </div>
                 )}
                 )) : ''}
                 </div>   
        </div>
    )
}
