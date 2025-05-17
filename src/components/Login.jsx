import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext.jsx';

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputStyle = 'w-full p-2 border rounded-md focus:ring-2 focus:ring-[#7886C7] focus:outline-none';
  const labelStyle = 'block text-[#2D336B] font-semibold mb-2';
  const buttonStyle = 'w-full py-2 text-lg bg-[#2D336B] text-white rounded-md shadow hover:bg-[#7886C7] transition-colors';

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email address';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3007/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Login failed');

      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user)); // ✅ store user info

      login(data.user); // ✅ Pass full user object
      alert("Login successful!");
      navigate('/dashboard');

    } catch (error) {
      setErrors({ server: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#FFF2F2] p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-[#2D336B] mb-6 text-center">Welcome Back</h2>

        {errors.server && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {errors.server}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
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

          <div className='mb-6'>
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

          <button type="submit" className={buttonStyle} disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Sign In'}
          </button>

          <button type="button" onClick={() => navigate('/reset-password')} className="mt-4 text-[#2D336B] hover:text-[#7886C7] text-sm">
            Forgot Password?
          </button>
        </form>
      </div>
    </main>
  );
};
