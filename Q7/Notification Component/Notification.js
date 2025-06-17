import React from 'react';
import './Notifications.css';
const Notifications = ({ notifications }) => {
  return (
    <div className="notification-container">
      {notifications.map((note, index) => (
        <div key={index} className={`notification-card ${note.read ? 'read' : 'unread'}`}>
          <p>{note.message}</p>
          <small>{note.date} - {note.time}</small>
          <span className="status">{note.read ? 'Read' : 'Unread'}</span>
        </div>
      ))}
    </div>
  );
};
export default Notifications;
