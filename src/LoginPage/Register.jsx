import React,{useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import './Register.css';
export default function Register() {
  const navigate=useNavigate();
  const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
  })

  const registerUser=async(e)=>{
    e.preventDefault();
    const {name,email,password}=data
    try {
      const {data}=await axios.post('/register',{
        name,email,password
      })

      if(data.error){
        toast.error(data.error)
      }else{
        setData({})
        toast.success('login Successful!')
        navigate('/login')
      }
    } catch (error) {
        console.log(error)
    }
    
  }
  const onChange = () => {};

  return (
    <>
      <div className='registercontainer'>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input className='name' type="text" placeholder='enter name...' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
        <label>Email</label>
        <input className='email' type="email" placeholder='enter email...' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
        <label>Password</label>
        <input className='password' type="password" placeholder='enter password...' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
        <Link to='/login'>Already a member? Login</Link>
        <ReCAPTCHA
        sitekey="6LeJa3gpAAAAAGNkIb1M0zIsKP81-0JCAxhf3MpF"
        onChange={onChange}
        />
        <button className='loginbutton' type='submit'>Submit</button>
      </form>
      </div>
    </>
  )
}
