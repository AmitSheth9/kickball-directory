import React, {useState} from 'react'
import PlayerForm from '../../components/PlayerForm';
import { createPlayer } from '../../services/players';
import { useHistory } from 'react-router';

export default function AddPlayer() {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('');
    const [teamId, setTeamId] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await createPlayer({name, position, teamId})
        console.log(response);
        history.push(`/teams/${teamId}`);
    }
    return (
        <div>
            <PlayerForm 
                name={name}
                position={position}
                teamId={teamId}
                setName={setName}
                setPosition={setPosition}
                setTeamId={setTeamId}
                handleSubmit={handleSubmit}
                />
        </div>
    )
}
