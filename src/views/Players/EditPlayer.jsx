import React, {useState} from 'react'
import { updatePlayerById } from '../../services/players';
import PlayerForm from './PlayerForm';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

export default function EditPlayer() {
    const {id} = useParams();
    const history = useHistory()
    const [name, setName] = useState('')
    const [position, setPosition] = useState('');
    const [teamId, setTeamId] = useState(id);
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await updatePlayerById(id, ({name, position}));
        console.log(response);
        history.push(`/players/${id}`)


    }
    return (
        <div>
            <PlayerForm 
                name={name}
                position={position}
                setName={setName}
                setPosition={setPosition}
                handleSubmit={handleSubmit}
                teamId={teamId}
                setTeamId={setTeamId}
                />
        </div>
    )
}
