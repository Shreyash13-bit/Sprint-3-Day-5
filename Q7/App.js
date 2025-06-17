import React from 'react';
import UserProfile from './UserProfile';
import Notifications from './Notifications';
function App() {
  const notifications = [
    { message: 'New message received', date: '2025-06-17', time: '06:30 AM', read: false },
    { message: 'Your profile was updated', date: '2025-06-17', time: '07:00 AM', read: true },
  ];
  return (
    <div>
      <UserProfile />
      <Notifications notifications={notifications} />
    </div>
  );
}
export default App;
