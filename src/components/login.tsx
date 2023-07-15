import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './NavBar';
import sjcl from "sjcl";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    const myBitArray = sjcl.hash.sha256.hash(password);
    const myHash = sjcl.codec.hex.fromBits(myBitArray);
    console.log(myHash);

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
            <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded-sm' type="submit">Login</button>
        </form>

        <Link className='text-blue-800 text-xs m-2' to={`/SignUp`}>Sign Up</Link>
        
        </div>
    </div>
    </div>
  );
};

export default Login;
