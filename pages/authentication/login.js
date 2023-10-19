import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Logo } from "@/public/images";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { email, password });
      const { token } = response.data;

      Cookies.set("token", token);

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="">
        <Link href="/" className=" font-medium items-center">
          <Image className=" mb-5" src={Logo} alt="logo" width={150} priority />
        </Link>
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
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
        <div className="text-center">
          <button
            className="button transition-colors duration-300"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
