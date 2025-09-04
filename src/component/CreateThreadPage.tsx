import React, { useState } from 'react'
import { useThread } from '../context/threadContext'
import { dummyUsers } from '../dummy-data/users';
import { Link, useNavigate } from 'react-router-dom';
import type { Thread } from '../types/types';

/* 
type Formdata={
    title:string;
    description:string;
} */

interface FormElements extends HTMLFormControlsCollection {
  TitleInput: HTMLInputElement
}
interface TitleFormElement extends HTMLFormElement {
  readonly elements: FormElements
}


export default function CreateThreadPage() {

    const {actions}=useThread()
    const [title,settitle]=useState("");
    const [description,setdescription]=useState("");
    const creator=dummyUsers[1]
    const navigate = useNavigate();
    function handleSubmit(event:React.FormEvent<TitleFormElement>) {
        event.preventDefault()
        const id =Math.floor(Math.random()*9000)
        const creationDate=new Date();
        const category="Thread"
        const _thread:Thread={
          id,
          title,
          description,
          creationDate,
          creator,
          category,
        }
        actions.createThread(_thread)
        settitle("")
        setdescription("")
        console.log("added",{_thread})
        navigate("/")
    }
  
    
  return (
    <div>
        <h1>Create Thread</h1>
        <form className='formlayout' onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
             className='formitem' 
             type="text"
             value={title}
             onChange={(e)=>{
              settitle(e.target.value)
             }}
             />
            <label htmlFor="description">Description</label>
            <textarea
             className='formitem'
             value={description}
             onChange={(e)=>{
              setdescription(e.target.value)
             }}
             />
            <button className='formitem' type="submit">Skapa</button>
            <Link to="/">View all threads</Link>
        </form>
    </div>
  )
}
