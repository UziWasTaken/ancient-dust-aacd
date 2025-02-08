import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // After successful login, redirect to welcome page
      navigate('/welcome');
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      {/* Render your form here */}
    </div>
  );
};

export default Login; 