import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './NavBar';
import axios from 'axios';
import sjcl from "sjcl";

const SignUp = () => {
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password === confirm){

      const myBitArray = sjcl.hash.sha256.hash(password);
    const myHash = sjcl.codec.hex.fromBits(myBitArray);


    try{
      await axios.post("http://localhost:5000/newUser",
      {
        "Name": name,
        "Gender":"M",
        "Phonenumber": phone,
        "Email": email,
        "Password": myHash
         }
      )

    }
    catch(e){
      console.log(e);
    }
      
      


    }

  };

  return (
    <div>
    <Navbar></Navbar>
    <div className='flex flex-col justify-center items-center m-10'>
        <div className='flex flex-col justify-center items-center m-10 bg-white rounded-md p-5'>
        <h2 className='text-3xl' >Sign Up</h2>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center wd-1/2'>

          <div className='flex flex-row m-5'>

          <div className='flex flex-col mx-2'>
                <label className='text-sm'>Name</label>
                <input
                className='my-2 bg-zinc-600 p-2 rounded-sm'
                type="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className='flex flex-col mx-2'>
                <label className='text-sm'>Email</label>
                <input
                type="email"
                placeholder="Email"
                value={email}
                className='my-2 bg-zinc-600 p-2 rounded-sm'
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

          </div>


          <div  className='flex flex-row my-3'>

          <div className='flex flex-col mx-2'>
                <label className='text-sm'>Password</label>
                <input
                type="password"
                placeholder="Password"
                value={password}
                className='my-2 bg-zinc-600 p-2 rounded-sm'
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className='flex flex-col mx-2'>
                <label className='text-sm'>Confirm Password</label>
                <input
                type="password"
                placeholder="Password"
                value={confirm}
                className='my-2 bg-zinc-600 p-2 rounded-sm'
                onChange={(e) => setConfirm(e.target.value)}
                />
            </div>
          
          
          </div>  


          <div className='flex flex-row m-5'>

          <div className='flex flex-col mx-2'>
                <label className='text-sm'>Phone Number</label>
                <input
                type="number"
                placeholder="123-456-7890"
                value={phone}
                className='my-2 bg-zinc-600 p-2 rounded-sm'
                onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            {/* <div className='flex flex-col mx-2'>
                <label className='text-sm'>Gender</label>
                <input
                type="password"
                placeholder="Confim Password"
                value={confirm}
                className='my-2 bg-zinc-600 p-2 rounded-sm'
                onChange={(e) => setConfirm(e.target.value)}
                />
            </div> */}


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
