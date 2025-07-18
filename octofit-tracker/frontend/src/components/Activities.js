import React, { useEffect, useState } from 'react';

const ACTIVITIES_API = 'https://sturdy-space-telegram-q4g95r6prcwj6-8000.app.github.dev/api/activities';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(ACTIVITIES_API)
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Activities</h2>
      <ul className="list-group">
        {activities.map(activity => (
          <li key={activity.id} className="list-group-item">
            {activity.activity_type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
