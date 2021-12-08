import React, {useState, useEffect} from 'react'
import { getPlayers } from '../../services/players';
import { Link } from 'react-router-dom'

export default function Players() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function effectPlayers() {
            const storePlayers = await getPlayers();
            console.log(storePlayers);
            setPlayers(storePlayers);
        }

    effectPlayers()}, [])


    return (
        <div>
            {players.map((player => {
                return (
                <Link to={`/players/${player.id}`}>  
                <p key={player.id}>{player.name}</p>
                </Link>             
            )}))}

            

        </div>
    )
}
