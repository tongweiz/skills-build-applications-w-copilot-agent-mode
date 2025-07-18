import React, { useEffect, useState } from 'react';

const TEAMS_API = 'https://sturdy-space-telegram-q4g95r6prcwj6-8000.app.github.dev/api/teams';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(TEAMS_API)
      .then(res => res.json())
      .then(data => setTeams(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Teams</h2>
      <ul className="list-group">
        {teams.map(team => (
          <li key={team.id} className="list-group-item">
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
