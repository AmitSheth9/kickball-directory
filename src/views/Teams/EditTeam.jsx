import React, {useState} from 'react'
import TeamForm from '../../components/TeamForm'
import { useHistory } from 'react-router';
import { updateTeamById } from '../../services/teams';
import { useParams } from 'react-router';

export default function EditTeam() {
    const [teamName, setTeamName] = useState('');
    const [teamCity, setTeamCity] = useState('');
    const [teamState, setTeamState] = useState('');
    const history = useHistory();
    const {id} = useParams();
    console.log(id);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(teamName, teamCity, teamState);
        const response = await updateTeamById( id, ({ name: teamName, city: teamCity, state: teamState }));
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
