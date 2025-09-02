import { createContext, useContext, useState } from "react"

type ThreadState= {
    Threads:Thread[];
    selectedThreadId?:number;
}

const initialState:ThreadState={
    Threads:[]
}

const ThreadContext=createContext<{
    state:ThreadState;
    setState:React.Dispatch<React.SetStateAction<ThreadState>>;
}>({
    state:initialState,
    setState:()=>{}
})

type ThreadProviderProps={
    children:React.ReactNode;
}

const ThreadContextProvider: React.FC<ThreadProviderProps>=({children})=>{
    const [state,setState]=useState(initialState);
    return(
        <ThreadContext.Provider value={{state,setState}}>
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