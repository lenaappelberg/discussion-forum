import { createContext, useContext, useEffect, useState } from "react"
import LocalStorageService from "../utils/LocalstorageService";

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
/*<{
    state:ThreadState;
    setState:React.Dispatch<React.SetStateAction<ThreadState>>;
}>({
    state:initialState,
    setState:()=>{}
})*/

type ThreadProviderProps={
    children:React.ReactNode;
}

const ThreadContextProvider: React.FC<ThreadProviderProps>=({children})=>{
    //const [threads,setThread]=useState(initialState);
    const [threads,setThread]=useState<Thread[]>([])
    useEffect(()=>{
        _getThreads()

    },[])
    useEffect(()=>{
        setThread(threads)
    },[])
    const _getThreads = () => {
        const _threads:Thread[] = LocalStorageService.getItem("@Thread/description",[])
        setThread(_threads)
    }
    const _setThreads = (_threads:Thread[])=>{
        LocalStorageService.setItem("@Thread/description",_threads)
        _setThreads(_threads)
    }
    const createThread:typeof initialState.actions.createThread = (thread) => {
        const updatedThreads=[ ...threads, thread]
        _setThreads(updatedThreads)
    }
    const actions :typeof initialState.actions={
        createThread
    }

    return(
        <ThreadContext.Provider value={{
            Threads:[],
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