import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const [formData, setFormData] = useState({
    email: location.state?.email || "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }
  
    const foundUser = users.find(
      user => user.email === formData.email && 
      user.password === formData.password
    );
  
    if (foundUser) {
      // Get data from all possible storage locations
      const currentUserData = JSON.parse(localStorage.getItem("currentUser")) || {};
      const userData = JSON.parse(localStorage.getItem("user")) || {};
      
      // Standardize the user object format with proper merging
      const completeUser = {
        // Start with the found user from users array
        ...foundUser,
        // Merge with other storage locations
        ...currentUserData,
        ...userData,
        // Ensure critical fields are properly set
        email: formData.email,
        firstname: foundUser.firstname || currentUserData.firstname || userData.firstname || foundUser.firstName || "",
        lastname: foundUser.lastname || currentUserData.lastname || userData.lastname || foundUser.lastName || "",
        username: foundUser.username || currentUserData.username || userData.username || "",
        name: foundUser.name || currentUserData.name || userData.name || 
             `${foundUser.firstname || currentUserData.firstname || userData.firstname || foundUser.firstName || ""} ${
               foundUser.lastname || currentUserData.lastname || userData.lastname || foundUser.lastName || ""
             }`.trim(),
        accountNumber: foundUser.accountNumber || currentUserData.accountNumber || userData.accountNumber || "",
        balance: foundUser.balance || currentUserData.balance || userData.balance || 0,
        transactions: foundUser.transactions || currentUserData.transactions || userData.transactions || []
      };
  
      // Update all storage locations
      localStorage.setItem("currentUser", JSON.stringify(completeUser));
      localStorage.setItem("user", JSON.stringify(completeUser));
      
      // Update users array
      const updatedUsers = users.map(user => 
        user.email === completeUser.email ? completeUser : user
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      
      navigate("/home", { state: { reload: true } });
    } else {
      setError("Invalid email or password");
      setIsLoading(false);
      console.log("Merged user data:", completeUser);
    }
  };
    
  
  
  

  return (
    <div className="flex flex-col w-full min-h-screen p-6 bg-white">
      <div className="flex items-center justify-between">
        <FaArrowLeft 
          className="text-gray-600 text-xl cursor-pointer" 
          onClick={() => navigate(-1)} 
        />
        <span className="text-sm text-gray-500">Login</span>
      </div>

      <h2 className="text-2xl font-bold text-[#3a3c4c] mt-6">Welcome back!</h2>
      <p className="text-gray-500 text-sm mt-2">
        Please enter your details to sign in
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div>
          <label className="block text-gray-500 text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A0FB]"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="username"
          />
        </div>

        <div className="relative">
          <label className="block text-gray-500 text-sm mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A0FB]"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
          <button
            type="button"
            className="absolute right-3 top-10 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button
          type="submit"
          className={`w-full h-12 mt-6 rounded-lg text-white font-semibold flex items-center justify-center ${
            isLoading ? "bg-gray-400" : "bg-[#18A0FB] hover:bg-[#0A3A5A]"
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing in...
            </>
          ) : "Sign In"}
        </button>
      </form>

      <div className="mt-4 text-center text-sm">
        <span className="text-gray-500">Don't have an account? </span>
        <button
          className="text-[#18A0FB] font-medium"
          onClick={() => {
            localStorage.removeItem("tempUserData");
            navigate("/get-started");
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}