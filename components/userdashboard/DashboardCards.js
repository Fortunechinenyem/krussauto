export const RecentActivityCard = () => {
  return (
    <div className="p-4 bg-[#141414] text-[#FAFAFA] card">
      <div className="card-header">
        <h3>Recent Activity</h3>
      </div>
      <div className="card-content">
        <ul>
          <li>
            Posted in the "Automotive Forum" - "Question about car maintenance."
          </li>
          <li>Added a new item to your portfolio - "My Latest Project."</li>
          {/* Add more activity items here */}
        </ul>
      </div>
    </div>
  );
};

export const NotificationsCard = () => {
  return (
    <div className="p-4 bg-[#141414] text-[#FAFAFA] card">
      <div className="card-header">
        <h3>Notifications</h3>
      </div>
      <div className="card-content">
        <ul>
          <li>
            <strong>New message:</strong> You have received a new message from
            "JohnDoe."
          </li>
          <li>
            <strong>Reminder:</strong> Your portfolio item "My Latest Project"
            is getting attention.
          </li>
          {/* Add more notification items here */}
        </ul>
      </div>
    </div>
  );
};

export const QuickActionsCard = () => {
  return (
    <div className="p-4 bg-[#141414] text-[#FAFAFA] card">
      <div className="card-header">
        <h3>Quick Actions</h3>
      </div>
      <div className="card-content">
        <button>Edit Profile</button>
        <button>Add New Portfolio Item</button>
        <button>Create a Forum Post</button>
        {/* Add more quick actions as buttons or links here */}
      </div>
    </div>
  );
};

export const AnalyticsCard = () => {
  return (
    <div className=" p-4 bg-[#141414] text-[#FAFAFA] card">
      <div className="card-header">
        <h3>Analytics & Insights</h3>
      </div>
      <div className="card-content">
        <p>
          Your portfolio item "My Latest Project" has been viewed 120 times.
        </p>
        <p>Your forum post "Question about car maintenance" has 10 comments.</p>
        {/* Add more analytics or insights here */}
      </div>
    </div>
  );
};

export const RecommendedContentCard = () => {
  return (
    <div className="p-4 bg-[#141414] text-[#FAFAFA] card">
      <div className="card-header">
        <h3>Recommended Content</h3>
      </div>
      <div className="card-content">
        <ul>
          <li>
            <a href="/recommended-forum-post">Recommended Forum Post 1</a>
          </li>
          <li>
            <a href="/recommended-portfolio-item">
              Recommended Portfolio Item 1
            </a>
          </li>
          {/* Add more recommended content links here */}
        </ul>
      </div>
    </div>
  );
};

export const SupportCard = () => {
  return (
    <div className="p-4 bg-[#141414] text-[#FAFAFA] card">
      <div className="card-header">
        <h3>Support & Help Center</h3>
      </div>
      <div className="card-content">
        <p>
          If you have any questions or need assistance, please visit our help
          center.
        </p>
        <button>Visit Help Center</button>
      </div>
    </div>
  );
};
