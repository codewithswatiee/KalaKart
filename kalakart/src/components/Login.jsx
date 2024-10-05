import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Submitted:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5E4D2] px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full bg-[#E6D2B5] shadow-lg rounded-lg p-8"
      >
        <h2 className="text-4xl font-bold text-[#708238] mb-4">Login</h2>
        <p className="text-lg text-[#4A5724] mb-8">Enter your credentials to access your account</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-[#4A5724] text-lg">Email</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full p-4 border rounded-lg bg-[#F0E2CC] border-[#708238] text-[#4A5724] text-lg focus:outline-none focus:border-[#5C6B2D]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#4A5724] text-lg">Password</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-4 border rounded-lg bg-[#F0E2CC] border-[#708238] text-[#4A5724] text-lg focus:outline-none focus:border-[#5C6B2D]"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-4 bg-[#708238] text-[#F0E2CC] font-bold text-lg rounded-lg hover:bg-[#5C6B2D] transition"
          >
            Log in
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
