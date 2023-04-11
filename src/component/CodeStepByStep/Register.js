import React, { useState } from 'react'

const Register = () => {
    const[user,setUser]=useState({
        name:"",
        email:"",
        password:"",
    });

    const handleChange=(event)=>{
        const{name,value}=event.target;
        setUser({
            ...user,[name]:value,
        })
    }
    
  return (
    
    <div className='col-sm-6 offset-sm-3'>
    {console.log(user)}
        <h1>User Sign Up</h1><br></br>
        <input type='text' name="name" value={user.name} placeholder='your Name' onChange ={e=>handleChange(e)}></input><br></br>
        <input type='text' name="email" value={user.email} placeholder='your Email' onChange={e=>handleChange(e)}></input><br></br>
        <input type='password'  name="password" value={user.password} placeholder='Enter Your Password'></input><br/>
        <button className='btn btn-primary'>SignUp</button>
    </div>
  )
}

export default Register