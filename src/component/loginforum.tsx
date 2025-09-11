import React, { useState } from 'react'
import { useUser } from '../context/usercontext'
import type { User } from '../types/types'
import { Link } from 'react-router-dom'

export default function Loginforum() {
    const {Users,actions}=useUser()
    //const _user=Users[]
    const [userName,setuserName]=useState("")
    const [password,setpassword]=useState("")
    function handlesubmit(){
    const _user:User={
          userName,
          password
    }
    actions.createUser(_user)
    }
  return (
    <div>
        <form className='formlayout' onSubmit={handlesubmit}>
            <label htmlFor="Username" className='form-label align-start'>Username</label>
            <input
             className='textarea-input'
             placeholder='Enter text here'
             value={userName}
             onChange={(e)=>{
              setuserName(e.target.value)
             }}
             />
             <label htmlFor="password" className='form-label align-start'>Password</label>
            <input
             className='textarea-input'
             placeholder='Enter text here'
             value={password}
             onChange={(e)=>{
              setpassword(e.target.value)
             }}
             />
             <button type="submit">Log in</button>
             <Link to="/" className='btn background-secondary'>Back to home</Link>
        </form>
    </div>
  )
}
