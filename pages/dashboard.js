import axios from "axios";
import Cookies from "js-cookie";

export default function DashboardPage() {
  const handleLogout = () => {
    // Clear the token cookie
    Cookies.remove("token");

    // Redirect to the login page
    router.push("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
