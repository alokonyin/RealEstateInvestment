import React, { useState } from 'react';
import { auth } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import './Auth.css';

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const [error, setError] = useState('');
      const [success, setSuccess] = useState('');
    
      // Handle form input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { email, password, confirmPassword } = formData;
    
        if (password !== confirmPassword) {
          setError('Passwords do not match.');
          return;
        }
    
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          setSuccess('Account created successfully!');
          setError('');
        } catch (err) {
          setError(err.message);
        }
      };

      return (
        <div className="auth-container">
          <h2>Sign Up</h2>
          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit" className="auth-submit">Sign Up</button>
          </form>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </div>
      );
    }

export default SignUp;
