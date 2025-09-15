import React from 'react'
import type { User } from '../types/types'
import Logoutbutton from './logoutbutton'

export default function Userprofile(children:User) {
  return (
    <div>
        <h2>{children.userName}</h2>
        <Logoutbutton/>        
    </div>
  )
}
