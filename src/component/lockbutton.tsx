import React from 'react'
import { useThread } from '../context/threadContext'

export default function Lockbutton() {
    useThread()
    const clickHandler=()=>{
        //threadcateogrize="LOCK"
    }
  return (
    <div>
        <button onClick={clickHandler()}>
            lock
        </button>
    </div>
  )
}
