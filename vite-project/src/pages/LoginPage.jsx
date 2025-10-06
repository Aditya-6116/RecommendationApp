import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Add login logic here
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
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#667eea', fontSize: '2.5rem', margin: '0 0 10px 0' }}>BuyGenie</h1>
        <h2 style={{ color: '#333', fontSize: '1.8rem', margin: '0 0 30px 0' }}>Login</h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
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
          <button type="submit" style={{
            padding: '15px',
            border: 'none',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%)',
            color: 'white',
            fontWeight: '600',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}>Sign In</button>
        </form>

        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span style={{ color: '#667eea', cursor: 'pointer' }} onClick={() => navigate('/register')}>
            New to BuyGenie? Register
          </span>
          <span style={{ color: '#667eea', cursor: 'pointer' }}>
            Forgot Password?
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
