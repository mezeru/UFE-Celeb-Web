import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from './NavBar';
import axios from 'axios';
import sjcl from "sjcl";

export const UserProfile = () => {
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const token = localStorage.getItem('token');

  const { id } = useParams()

  useEffect(() => {
    
    const getUser = async () => {

        try{
            const data = await axios.get(`http://localhost:5000/User?id=${id}`,{
                headers:{
                    Authorization: token
                }
            });

            setPhone(data.data.Phonenumber);
            setName(data.data.Name);
            setEmail(data.data.Email);

            console.log(phone,name,email)

        }
        catch(e){
            console.log(e);
        }

        
        
    }

    getUser();


  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.put(`http://localhost:5000/User?id=${"64b1e698ce439cd7b32eac11"}`,
      {
        "Name": name,
        "Gender":"M",
        "Phonenumber": phone,
        "Email": email
        },
        {
            headers:{
                Authorization: token,
                "Content-Type": "application/json"
            }
        }
      )

    }
    catch(e){
      console.log(e);
    }
      
      


    

  };

  return (
    <div>
    <div className='flex flex-col justify-center items-center m-10'>
        <div className='flex flex-col justify-center items-center m-10 bg-white rounded-md p-5'>
        <h2 className='text-3xl' >User Data</h2>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center wd-1/2'>

          <div className='flex flex-row m-5'>

          <div className='flex flex-col mx-2'>
                <label className='text-sm'>Name</label>
                <input
                className='my-2 bg-zinc-600 p-2 rounded-sm text-white'
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
                className='my-2 bg-zinc-600 p-2 rounded-sm text-white'
                onChange={(e) => setEmail(e.target.value)}
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
                className='my-2 bg-zinc-600 p-2 rounded-sm text-white'
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

            

            

            <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded-sm' type="submit">Update</button>
        </form>
        
        </div>
    </div>
    </div>
  );
};