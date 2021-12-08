import React, { useState, useEffect } from 'react'
import { getTeams } from '../../services/teams'
import { Link } from 'react-router-dom';
export default function Teams() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        async function team() {
     const storeTeams = await getTeams();
            console.log(storeTeams)
            setTeams(storeTeams);
        }
    team()},[]);
    console.log(teams);
    return (
        
        <div>
            {teams.map((team => {
            return (
                <Link to={`/teams/${team.id}`}>
                 <div key={team.id}>{team.name}</div>
                </Link>
            )}
            
                ))}
        </div>
    )
}
