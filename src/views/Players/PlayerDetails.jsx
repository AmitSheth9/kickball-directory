import React, { useState, useEffect} from 'react'
import { getPlayerById } from '../../services/players'
import { useParams } from 'react-router'

export default function PlayerDetails() {
    const [player, setPlayer] = useState([]);
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        async function playerEffect() {
            const storePlayer = await getPlayerById(id);
            console.log(storePlayer);
            setPlayer(storePlayer);
        }
    playerEffect()}, [id])
    return (
        <div>
            <p>{player.name}</p>
            <p>{player.position}</p>
            <p>{player.teams} ? <p>{player.teams.name}</p> : ''</p>
        </div>
    )
}
