import { FiLogOut, FiSettings, FiUser, FiHelpCircle } from "react-icons/fi";

export default function MorePage() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">More Options</h1>
      
      <div className="space-y-3">
        <button className="flex items-center w-full p-3 rounded-lg bg-gray-100 hover:bg-gray-200">
          <FiUser className="mr-3 text-lg" />
          <span>Profile Settings</span>
        </button>
        
        <button className="flex items-center w-full p-3 rounded-lg bg-gray-100 hover:bg-gray-200">
          <FiSettings className="mr-3 text-lg" />
          <span>App Settings</span>
        </button>
        
        <button className="flex items-center w-full p-3 rounded-lg bg-gray-100 hover:bg-gray-200">
          <FiHelpCircle className="mr-3 text-lg" />
          <span>Help & Support</span>
        </button>
        
        <button className="flex items-center w-full p-3 rounded-lg bg-red-50 hover:bg-red-100 text-red-600">
          <FiLogOut className="mr-3 text-lg" />
          <span>Log Out</span>
        </button>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>App Version 1.0.0</p>
      </div>
    </div>
  );
}