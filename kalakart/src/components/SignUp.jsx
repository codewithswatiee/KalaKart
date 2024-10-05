import React, { useState } from 'react';
import { motion } from 'framer-motion';

const statesWithCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur"],
  "Delhi": ["New Delhi", "Dwarka", "Saket"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
  "Karnataka": ["Bengaluru", "Mysore", "Hubli"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Noida"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur"],
};

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user', // Default to 'user'
    address: '',
    city: '',
    state: '',
    country: 'India', // Default to India
    phone_number: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Submitted:', formData);
    // Add logic here for form validation or calling an API
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData({ ...formData, state: selectedState, city: '' });
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setFormData({ ...formData, city: selectedCity });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5E4D2] px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-[#E6D2B5] shadow-lg rounded-lg p-8"
      >
        <h2 className="text-4xl font-bold text-[#708238] mb-4">Sign Up</h2>
        <p className="text-lg text-[#4A5724] mb-8">Create your account by filling in the details below</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-[#4A5724] text-lg">Name</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full p-4 border rounded-lg bg-[#F0E2CC] border-[#708238] text-[#4A5724] text-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-[#4A5724] text-lg">Email</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full p-4 border rounded-lg bg-[#F0E2CC] border-[#708238] text-[#4A5724] text-lg"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-[#4A5724] text-lg">Password</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password (min 8 characters, 1 special character)"
              className="w-full p-4 border rounded-lg bg-[#F0E2CC] border-[#708238] text-[#4A5724] text-lg"
            />
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-[#4A5724] text-lg">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-lg bg-[#F0E2CC] border-[#708238] text-[#4A5724] text-lg"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-[#4A5724] text-lg">Address</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Your Address"
              className="w-full p-4 border rounded-lg bg-[#F0E2CC] border-[#708238] text-[#4A5724] text-lg"
            />
          </div>

          {/* State and City */}
          <div className="flex space-x-4">
            {/* State Dropdown */}
            <div className="w-1/2">
              <label htmlFor="state" className="block text-[#4A5724] text-lg">State</label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleStateChange}
                required
                className="w-full p-4 border rounded-lg bg-[#F0E2CC] border-[#708238] text-[#4A5724] text-lg"
              >
                <option value="">Select State</option>
                {Object.keys(statesWithCities).map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* City Dropdown */}
            <div className="w-1/2">
              <label htmlFor="city" className="block text-[#4A5724] text-lg">City</label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleCityChange}
                required
                className="w-full p-4 border rounded-lg bg-[#F0E2CC] border-[#708238] text-[#4A5724] text-lg"
                disabled={!formData.state} // Disable city dropdown until a state is selected
              >
                <option value="">Select City</option>
                {formData.state && statesWithCities[formData.state]?.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Country and Phone Number */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="country" className="block text-[#4A5724] text-lg">Country</label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                placeholder="Your Country"
                className="w-full p-4 border rounded-lg bg-[#F0E2CC] border-[#708238] text-[#4A5724] text-lg"
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="phone_number" className="block text-[#4A5724] text-lg">Phone Number</label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                type="tel"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
                placeholder="Your Phone Number"
                className="w-full p-4 border rounded-lg bg-[#F0E2CC] border-[#708238] text-[#4A5724] text-lg"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full p-4 bg-[#4A5724] text-[#F0E2CC] rounded-lg text-xl font-bold"
            >
              Sign Up
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default SignUp;