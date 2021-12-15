import React, {useState} from 'react'
import TeamForm from '../../components/TeamForm';
import { createTeam } from '../../services/teams'
import { useHistory } from 'react-router';

export default function AddTeam() {
    const [teamName, setTeamName] = useState('');
    const [teamCity, setTeamCity] = useState('');
    const [teamState, setTeamState] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await createTeam({ name: teamName, city: teamCity, state: teamState });
        console.log(response);
        history.push(`/teams/${response[0].id}`);
    }
    return (
        <div>
            <TeamForm 
            teamName={teamName}
            teamCity={teamCity}
            teamState={teamState}
            setTeamName={setTeamName}
            setTeamCity={setTeamCity}
            setTeamState={setTeamState}
            handleSubmit={handleSubmit}
            />
        </div>
    )
}
