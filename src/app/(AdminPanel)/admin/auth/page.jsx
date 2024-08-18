"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF } from 'react-icons/fa';
import Image from 'next/image';
import loginBanner from '../../../../../public/admin/loginBanner.jpg';

const AdminLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/admin/login', { email, password });
      console.log(response.data);
      // Handle success (e.g., redirect to admin dashboard)
    } catch (error) {
      console.error(error);
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col md:flex-row max-w-8xl shadow-lg rounded-lg bg-white overflow-hidden">
        
        {/* Banner Image - Only for Desktop and Tablet */}
        <div className="hidden md:block md:w-1/2">
          <Image
            src={loginBanner}
            alt="Admin Login Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 md:w-1/2 w-full flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold mb-2 text-center">Admin Login</h2>
          <p className="text-center text-gray-600 mb-6">
            Access your admin dashboard 🚀
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer mt-8"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> :  <FaEyeSlash />}
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 text-white rounded-lg ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
              {loading ? 'Logging in...' : 'Login'}
            </motion.button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <p className="text-xs text-center text-gray-500 uppercase">or login with</p>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-red-500 text-white p-2 rounded-full mx-1 hover:bg-red-600">
              <FaGoogle />
            </button>
            <button className="bg-blue-500 text-white p-2 rounded-full mx-1 hover:bg-blue-600">
              <FaFacebookF />
            </button>
          </div>
          <div className="flex justify-between mt-4">
            <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot your password?</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLoginForm;