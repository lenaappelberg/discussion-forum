import React, { useState } from 'react'
import { useThread } from '../context/threadContext'
import type { Thread } from '../types/types'

export default function Lockbutton(children:Thread) {
    const {actions}=useThread()
    const title=children.title
    const description=children.description
    const creator=children.creator
    const id =children.id
    const creationDate=children.creationDate
    const clickHandler=()=>{
        //threadcateogrize="LOCK"
        const category="LOCKED"
        //oh dear this makes a new thread
        const _thread:Thread={
                  id,
                  title,
                  description,
                  creationDate,
                  creator,
                  category,
                }
                actions.createThread(_thread)
    }
  return (
    <div>
        <button onClick={clickHandler}>
            lock
        </button>
    </div>
  )
}
