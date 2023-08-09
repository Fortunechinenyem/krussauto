import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { email, password });
      const { token } = response.data;

      // Store the token in a cookie
      Cookies.set("token", token);

      // Redirect to the dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
        Login
      </h1>
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-md p-8"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          className="bg-[#006950] text-white font-bold rounded-md px-6 py-2 text-lg hover:bg-[#005740] transition-colors duration-300"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}