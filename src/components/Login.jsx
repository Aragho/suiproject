import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: location.state?.email || "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    
  
    const user = users.find(
      user => user.email.toLowerCase() === formData.email.toLowerCase()
    );

    if (!user) {
      setError("User not found. Please sign up first.");
      return;
    }

   
    if (user.password === formData.password) {
   
      const updatedUser = {
        ...user,
        lastLogin: new Date().toISOString()
      };
      
   
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      
   
      const updatedUsers = users.map(u => 
        u.email === user.email ? updatedUser : u
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      
      navigate("/home");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 border rounded-lg"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full p-3 border rounded-lg pr-10"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-gray-600">
        Don't have an account?{" "}
        <button 
          onClick={() => navigate("/get-started")}
          className="text-blue-600 hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}