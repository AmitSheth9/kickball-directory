import React from 'react'
//import { createTeam } from '../../services/teams';
//import { useHistory } from 'react-router';

export default function TeamForm({teamName, teamCity, teamState, setTeamName, setTeamCity, setTeamState, handleSubmit}) {
    
    return (
        <div>
         <fieldset>
             <legend>Add a team</legend>
             <form className = 'team-form' onSubmit={handleSubmit}>
                 <label htmlFor='team name'>Team Name:
                     <input
                     value={teamName} 
                     onChange={(e) => setTeamName(e.target.value)}/>
                 </label >
                 <label htmlFor='team city'>Team city:
                     <input 
                     value={teamCity}
                     onChange={(e) => setTeamCity(e.target.value)}/>
                 </label>
                 <label htmlFor='team state'>Team State: 
                     <input 
                     value={teamState}
                     onChange={(e) => setTeamState(e.target.value)}/>
                 </label>
                 <button type='submit'>Submit</button>
             </form>
         </fieldset>
        </div>
    )
}
