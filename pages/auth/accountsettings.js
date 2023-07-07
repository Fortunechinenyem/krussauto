// import { useAuth } from "next-auth";

// export default function AccountSettings() {
//   const { user, updateEmail, updatePassword } = useAuth();
//   const [newEmail, setNewEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const handleUpdateEmail = async () => {
//     try {
//       await updateEmail(newEmail);
//       setNewEmail("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleUpdatePassword = async () => {
//     try {
//       await updatePassword(newPassword);
//       setNewPassword("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Account Settings</h2>
//       <div>
//         <p>Email: {user.email}</p>
//         <input
//           type="email"
//           placeholder="New Email"
//           value={newEmail}
//           onChange={(e) => setNewEmail(e.target.value)}
//         />
//         <button onClick={handleUpdateEmail}>Update Email</button>
//       </div>
//       <div>
//         <input
//           type="password"
//           placeholder="New Password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//         />
//         <button onClick={handleUpdatePassword}>Update Password</button>
//       </div>
//     </div>
//   );
// }
