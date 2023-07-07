import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './NavBar';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login form submitted');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
    <Navbar></Navbar>
    <div className='flex flex-col justify-center items-center m-10'>
        <div className='flex flex-col justify-center items-center m-10 bg-white rounded-md p-5'>
        <h2 className='text-3xl' >Login</h2>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center wd-1/2'>
            <div className='flex flex-col my-2'>
                <label className='text-sm'>Email</label>
                <input
                className='my-2 bg-zinc-600 p-2 rounded-sm'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className='flex flex-col my-2'>
                <label className='text-sm'>Password</label>
                <input
                type="password"
                placeholder="Password"
                value={password}
                className='my-2 bg-zinc-600 p-2 rounded-sm'
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className='flex flex-col my-2'>
                <label className='text-sm'>Confirm Password</label>
                <input
                type="password"
                placeholder="Confim Password"
                value={confirm}
                className='my-2 bg-zinc-600 p-2 rounded-sm'
                onChange={(e) => setConfirm(e.target.value)}
                />
            </div>

            <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded-sm' type="submit">Sign Up</button>
        </form>

        <Link className='text-blue-800 text-xs m-2' to={`/login`}>Login</Link>
        
        </div>
    </div>
    </div>
  );
};

export default SignUp;
