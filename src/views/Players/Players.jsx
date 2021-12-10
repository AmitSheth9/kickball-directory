import React, {useState, useEffect} from 'react'
import { getPlayers } from '../../services/players';
import { Link } from 'react-router-dom'
import './players.css'

export default function Players() {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function effectPlayers() {
            const storePlayers = await getPlayers();
            console.log(storePlayers);
            setPlayers(storePlayers);
            setLoading(false);
        }

    effectPlayers()}, [])

        if (loading) return <p>Loading...</p>
    return (
        <div>
            <Link to='/players/new'>Add a player</Link>
            {players.map((player => {
                return (
            <div key={player.id} className='player-container'>   
                <Link className='player-link' to={`/players/${player.id}`}>{player.name}</Link>
                <Link className='player-link' to={`/players/edit/${player.id}`}>Edit Player</Link>
            </div>          
            )}))}

            

        </div>
    )
}
