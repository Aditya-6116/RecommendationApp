import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    numbers: false,
    letters: false,
    specialChars: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'password') validatePassword(value);
  };

  const validatePassword = (password) => {
    setPasswordValidations({
      length: password.length >= 8,
      numbers: (password.match(/\d/g) || []).length >= 2,
      letters: (password.match(/[a-zA-Z]/g) || []).length >= 2,
      specialChars: (password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g) || []).length >= 2
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return alert("Passwords don't match!");
    if (!Object.values(passwordValidations).every(v => v)) return alert("Password requirements not met!");
    console.log('Register:', formData);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '450px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#667eea', fontSize: '2.5rem', margin: '0 0 10px 0' }}>BuyGenie</h1>
        <h2 style={{ color: '#333', fontSize: '1.8rem', margin: '0 0 30px 0' }}>Register</h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: '12px 16px',
              border: '2px solid #e0e0e0',
              borderRadius: '10px',
              fontSize: '1rem'
            }}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              padding: '12px 16px',
              border: '2px solid #e0e0e0',
              borderRadius: '10px',
              fontSize: '1rem'
            }}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{
              padding: '12px 16px',
              border: '2px solid #e0e0e0',
              borderRadius: '10px',
              fontSize: '1rem'
            }}
            required
          />

          <div style={{
            textAlign: 'left',
            background: '#f8f9fa',
            padding: '15px',
            borderRadius: '10px',
            margin: '10px 0'
          }}>
            <ul style={{ paddingLeft: '20px', fontSize: '0.8rem', margin: 0 }}>
              <li style={{ color: passwordValidations.length ? '#4CAF50' : '#666' }}>✓ 8+ characters</li>
              <li style={{ color: passwordValidations.numbers ? '#4CAF50' : '#666' }}>✓ At least 2 numbers</li>
              <li style={{ color: passwordValidations.letters ? '#4CAF50' : '#666' }}>✓ At least 2 letters</li>
              <li style={{ color: passwordValidations.specialChars ? '#4CAF50' : '#666' }}>✓ At least 2 special characters</li>
            </ul>
          </div>

          <button type="submit" style={{
            padding: '15px',
            border: 'none',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%)',
            color: 'white',
            fontWeight: '600',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}>Create Account</button>
        </form>

        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span style={{ color: '#667eea', cursor: 'pointer' }} onClick={() => navigate('/login')}>
            Already have an account? Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
