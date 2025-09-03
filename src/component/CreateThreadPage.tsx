import React, { useState } from 'react'
import { useThread } from '../context/threadContext'
import { dummyUsers } from '../dummy-data/users';
import { Router, useNavigate } from 'react-router-dom';

type Formdata={
    title:string;
    description:string;
}
interface FormElements extends HTMLFormControlsCollection {
  TitleInput: HTMLInputElement
}
interface TitleFormElement extends HTMLFormElement {
  readonly elements: FormElements
}


export default function CreateThreadPage() {
    const {Threads,actions}=useThread()
    const [title,settitle]=useState("");
    const [description,setdescription]=useState("");
    const creator=dummyUsers[1]
    const navigate = useNavigate();
    function handleSubmit(event:React.FormEvent<TitleFormElement>) {
        event.preventDefault()
        const id =Math.floor(Math.random()*9000)
        const creationdate=new Date().toDateString()
        const category="Thread"
        const _threads:Thread={
          id,
          title,
          description,
          creationdate,
          creator,
          category,
        }
        actions.createThread(_threads)
        settitle("")
        setdescription("")
        console.log("added",{_threads})
        navigate("/")
    }
  
    
  return (
    <div>
        <h1>Skapa tråd</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input 
             type="text"
             value={title}
             onChange={(e)=>{
              settitle(e.target.value)
             }}
             />
            <label htmlFor="description">description</label>
            <input type="text"
             value={description}
             onChange={(e)=>{
              setdescription(e.target.value)
             }}
             />
            <button type="submit">Skapa</button>
        </form>
    </div>
  )
}
