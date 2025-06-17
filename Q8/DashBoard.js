import React from 'react';
import UserProfile from './UserProfile';
import Notifications from './Notifications';
const Dashboard = () => {
  const user = {
    name: 'Shreyash Roy',
    email: 'shreyash@example.com',
    avatarUrl: '',
    bio: 'Aspiring Developer learning React and Spring Boot.'
  };
  const notifications = [
    { message: 'Welcome to the dashboard!', date: '2025-06-17', time: '06:00 AM', read: false },
    { message: 'Your task was submitted.', date: '2025-06-17', time: '06:30 AM', read: true },
    { message: 'New comment on your post.', date: '2025-06-17', time: '03:15 AM', read: false }
  ];
  return (
    <div>
      <h1>Dashboard</h1>
      <UserProfile
        name={user.name}
        email={user.email}
        avatarUrl={user.avatarUrl}
        bio={user.bio}
      />
      <Notifications notifications={notifications} />
    </div>
  );
};
export default Dashboard;
