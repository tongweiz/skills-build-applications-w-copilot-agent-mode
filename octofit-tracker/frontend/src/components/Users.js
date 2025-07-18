import React, { useEffect, useState } from 'react';

const USERS_API = 'https://sturdy-space-telegram-q4g95r6prcwj6-8000.app.github.dev/api/users';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(USERS_API)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item">
            {user.username} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
