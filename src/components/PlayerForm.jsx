import React from 'react'
//import { createPlayer } from '../../services/players';

export default function PlayerForm({ name, position, teamId, setName, setPosition, setTeamId, handleSubmit}) {
   
    return (
        <div>
            <fieldset>
                <legend>Add a player</legend>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'> Name: 
                        <input value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                        </label>
                    <label> Position:
                        <input value={position} 
                        onChange={(e) => setPosition(e.target.value)}/>
                    </label>
                    <label>Team:
                        <input value={teamId} 
                        onChange={(e) => setTeamId(e.target.value)}/>
                    </label>
                    <button type='submit'>Submit</button>
                    

                </form>
            </fieldset>
        </div>
    )
}
