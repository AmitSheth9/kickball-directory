import React, {useState, useEffect} from 'react'
import { getPlayers, deletePlayerById  } from '../../services/players';
import { Link } from 'react-router-dom'
import './players.css'

export default function Players() {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    async function effectPlayers() {
        const storePlayers = await getPlayers();
        console.log(storePlayers);
        setPlayers(storePlayers);
        setLoading(false);
    }
    useEffect(() => {
       
        

    effectPlayers()}, [])

    const handleDelete = async (id, name) => {
        alert(`You have deleted ${name}`)
        console.log(id);
        const response = await deletePlayerById(id);
        console.log(response);
        effectPlayers();
    }

        if (loading) return <p>Loading...</p>
    return (
        <div><br/>
            <Link to='/players/new'>Add a player</Link><br/><br/>
            {players.map((player => {
                return (
            <div key={player.id} className='player-container'>   
                <Link className='player-link' to={`/players/${player.id}`}>{player.name}</Link>
                <Link  to={`/players/edit/${player.id}`}><button className='player-button'>Edit Player</button></Link>
                <Link  to={`/players`}><button className='player-button' onClick={() => handleDelete(player.id, player.name)}>Delete Player</button></Link>
            </div>          
            )}))}

            

        </div>
    )
}
