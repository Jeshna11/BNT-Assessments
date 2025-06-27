import React, { useState } from 'react';
function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login Submitted!\nEmail: ${formData.email}\nPassword: ${formData.password}`);
  };
  const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';
  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login Form</h2>
      <div style={{ marginBottom: '15px' }}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '8px', width: '250px' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          style={{ padding: '8px', width: '250px' }}
        />
      </div>
      <button
        type="submit"
        disabled={!isFormValid}
        style={{
          padding: '8px 20px',
          backgroundColor: isFormValid ? '#28a745' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: isFormValid ? 'pointer' : 'not-allowed'
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
