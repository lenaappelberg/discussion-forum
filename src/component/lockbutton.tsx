import React, { useEffect, useState } from 'react'
import { useThread } from '../context/threadContext'
import type { Thread } from '../types/types'

export default function Lockbutton(children:Thread) {
    const {actions}=useThread()
    const clickHandler=()=>{
        //threadcateogrize="LOCK"
        actions.LockThread(children.id)
    }
  return (
    <div>
        <button onClick={clickHandler}>
            lock
        </button>
    </div>
  )
}
