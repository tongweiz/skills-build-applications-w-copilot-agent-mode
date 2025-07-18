import React, { useEffect, useState } from 'react';

const LEADERBOARD_API = 'https://sturdy-space-telegram-q4g95r6prcwj6-8000.app.github.dev/api/leaderboard';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(LEADERBOARD_API)
      .then(res => res.json())
      .then(data => setLeaderboard(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Leaderboard</h2>
      <ul className="list-group">
        {leaderboard.map(entry => (
          <li key={entry.id} className="list-group-item">
            {entry.user?.username || 'Unknown'} - {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
