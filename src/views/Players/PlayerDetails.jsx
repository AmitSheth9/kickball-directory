import React, { useState, useEffect} from 'react'
import { getPlayerById } from '../../services/players'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

export default function PlayerDetails() {
    const [player, setPlayer] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        async function playerEffect() {
            const storePlayer = await getPlayerById(id);
            console.log(storePlayer);
            setPlayer(storePlayer);
            setLoading(false);
        }
    playerEffect()}, [id])

    if (loading) return <p>Loading Player...</p>
    return (
        <div>
            <p>{player.name}</p>
            <p>{player.position}</p>
          
           <p> {player.teams ? <Link to={`/teams/${player.teams.id}`}> {player.teams.name} </Link>: '' }</p>
        </div>
    )
}
