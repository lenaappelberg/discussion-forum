import { createContext, useContext, useEffect, useState } from "react"
import {LocalStorageServiceThread} from "../utils/localStorageService";
import type { Thread } from '../types/types';

type ThreadState= {
    Threads:Thread[];
    selectedThreadId?:number;
    actions: {
        createThread:(thread:Thread)=>void
    }
}

const initialState:ThreadState={
    Threads:[],
    actions:{
        createThread:()=>{}
    }
}


const ThreadContext=createContext<ThreadState>(initialState)

type ThreadProviderProps={
    children:React.ReactNode;
}

const ThreadContextProvider: React.FC<ThreadProviderProps>=({children})=>{

    const [threads,setThreads]=useState<Thread[]>([])
    useEffect(()=>{
        _getThreads()
    },[])

    const _getThreads = () => {
        const _threads:Thread[] = LocalStorageServiceThread.getItem("@Thread",[])
        setThreads(_threads)
    }
    const _setThreads = (_threads:Thread[])=>{
        LocalStorageServiceThread.setItem("@Thread",_threads)
        setThreads(_threads)
    }
    const createThread:typeof initialState.actions.createThread = (thread) => {
        const updatedThreads=[ ...threads, thread]
        _setThreads(updatedThreads)
    }
    const actions :typeof initialState.actions={
        createThread
    }
    /*const categorizeThread =(threadcategory)=>{
        constupatedcategory=[...threads,threadcategory]
    }*/

    return(
        <ThreadContext.Provider value={{
            Threads:threads,
            actions
        }}>
            {children}
        </ThreadContext.Provider>
    )
}

const useThread=()=>{
    const context=useContext(ThreadContext);
    if (context===undefined) {
        throw new Error('useThread must be used within a threadprovider')
    }
    return context;
}

export{
    ThreadContextProvider,
    useThread
}