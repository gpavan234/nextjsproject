import { useState } from "react";
import { registerUser } from "./Components/Apiservice/authService";


export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const handleRegister = async () => {
    try {
      const response = await registerUser(formData);
      setMessage("Registration successful!");
      console.log(response);
    } catch (error) {
      setMessage("Registration failed.");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Register</h1>
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Register
        </button>
        <a href="/login" style={{display:"flex", justifyContent:"center"}}>login</a>
        {message && <p className="text-center text-sm mt-3 text-gray-600">{message}</p>}
      </div>
    </div>
  );
}
