import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Style constants with direct hex color usage
  const inputStyle = 'w-full p-2 border rounded-md focus:ring-2 focus:ring-[#7886C7] focus:outline-none';
  const labelStyle = 'block text-[#2D336B] font-semibold mb-2';
  const buttonStyle = 'w-full py-2 text-lg bg-[#2D336B] text-white rounded-md shadow hover:bg-[#7886C7] transition-colors';

  // Validation rules
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email address';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3007/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Registration failed');

      alert("Registration successful!");
      navigate('/login');
    } catch (error) {
      setErrors({ server: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#FFF2F2] p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-[#2D336B] mb-6 text-center">Create Account</h2>
        
        {errors.server && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {errors.server}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className='mb-4'>
            <label htmlFor="firstName" className={labelStyle}>First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`${inputStyle} ${errors.firstName ? 'border-red-500' : ''}`}
              onChange={handleChange}
              required
            />
            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
          </div>

          <div className='mb-4'>
            <label htmlFor="lastName" className={labelStyle}>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={`${inputStyle} ${errors.lastName ? 'border-red-500' : ''}`}
              onChange={handleChange}
              required
            />
            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
          </div>

          <div className='mb-4'>
            <label htmlFor="phone" className={labelStyle}>Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`${inputStyle} ${errors.phone ? 'border-red-500' : ''}`}
              onChange={handleChange}
              required
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
          </div>

          <div className='mb-4'>
            <label htmlFor="email" className={labelStyle}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`${inputStyle} ${errors.email ? 'border-red-500' : ''}`}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          <div className='mb-4'>
            <label htmlFor="password" className={labelStyle}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className={`${inputStyle} ${errors.password ? 'border-red-500' : ''}`}
              onChange={handleChange}
              required
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          </div>

          <div className='mb-6'>
            <label htmlFor="confirmPassword" className={labelStyle}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={`${inputStyle} ${errors.confirmPassword ? 'border-red-500' : ''}`}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
          </div>

          <button
            type="submit"
            className={buttonStyle}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registering...' : 'Create Account'}
          </button>
        </form>
      </div>
    </main>
  );
};