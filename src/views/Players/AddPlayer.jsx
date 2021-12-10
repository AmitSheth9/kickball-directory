import React, {useState} from 'react'
import PlayerForm from './PlayerForm';

export default function AddPlayer() {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('');
    const [teamId, setTeamId] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await createPlayer({name, position, teamId})
        console.log(response);

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
