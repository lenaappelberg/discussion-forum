import React from 'react'
import { useUser } from '../context/usercontext'

export default function Logoutbutton() {
    const {actions}=useUser()

    actions.logout
  return (
    <div>
        <button>logout</button>
    </div>
  )
}
