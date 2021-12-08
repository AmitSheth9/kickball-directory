import React, { useState, useEffect } from 'react'
import { getTeams } from '../../services/teams'
import { Link } from 'react-router-dom';
export default function Teams() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function team() {
     const storeTeams = await getTeams();
            console.log(storeTeams)
            setTeams(storeTeams);
            setLoading(false);
        }
    team()},[]);
    console.log(teams);
    if(loading) return <p>Loading...</p>
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
