import React from 'react'
import { useThread } from '../context/threadContext'

type Formdata={
    title:string;
    description:string;
}
interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements
}
export default function CreateThreadPage() {
    const threads=useThread()
    function handleSubmit(event:React.FormEvent<UsernameFormElement>) {
        event.preventDefault()
        //threads.
    }
  
    
  return (
    <div>
        <h1>Skapa tråd</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" />
            <label htmlFor="description">description</label>
            <input type="text" />
            <button type="submit">Skapa</button>
        </form>
    </div>
  )
}
