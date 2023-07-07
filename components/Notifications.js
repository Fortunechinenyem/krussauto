export default function Notifications() {
  const notifications = [
    { id: 1, message: "Your inspection report is ready." },
    { id: 2, message: "Upcoming inspection appointment reminder." },
    // Add more notifications
  ];

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            <p>{notification.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
