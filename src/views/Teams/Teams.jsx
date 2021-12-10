import React, { useState, useEffect } from 'react'
import { getTeams, deleteTeamById } from '../../services/teams'
import { Link } from 'react-router-dom';
import './teams.css';





function Teams() {
    const [teams, setTeams] = useState([]);
   // const [loading, setloading] = useState(true);
    const [loading, setLoading] = useState(true);
    async function team (){
        setLoading(true);
        const storeTeams = await getTeams();
        console.log(storeTeams)
        setTeams(storeTeams);
        setLoading(false);
    }
    useEffect(() => {
       
        
             team() },[]);
    console.log(teams);

   const handleDelete = async ({id, name}) => {
        console.log({id,name})
        const deleteResp = await deleteTeamById(id);
        console.log(deleteResp);
        console.log(teams);
        team();
    };  

 if (loading) return <p>Loading...</p>
    return (
       
        <div>
            <p>
           <Link to='/teams/new'> Add a team</Link>
           </p>
           <div>
            {teams.map((team => {
            return (
               <div key={team.id} className='team-container'> 
                    <Link to={`/teams/${team.id}`}>
                    <div className='team-link'>{team.name}</div>
                    </Link>
                    <Link to={`teams/edit/${team.id}`}>
                    <button className='team-button'>Edit</button>
                    </Link>
                   <button className = 'team-button' onClick={() => handleDelete({id:team.id, name: team.name })}>Delete Team</button>
                   
                </div>
            )}
            
                ))}
            </div>
        </div>
    )
}

export default Teams

