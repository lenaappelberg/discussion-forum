import React, { createContext, useContext, useEffect, useState } from "react";
import type { User } from "../types/types";
import  { LocalStorageServiceUser } from "../utils/localStorageService";

type UserState= {
    Users:User[];
    selectedUserId?:number;
    actions: {
        createUser:(user:User)=>void
        login:(user:User)=>void
        logout:(user:User)=>void
    }
}

const initialState:UserState={
    Users:[],
    actions:{
        createUser:()=>{},
        login:()=>{},
        logout:()=>{}
    }
}


const UserContext=createContext<UserState>(initialState)

type UserProviderProps={
    children:React.ReactNode;
}
const UserContextProvider: React.FC<UserProviderProps> = ({children})=>{

    const [users,setUsers]=useState<User[]>([])
    useEffect(()=>{
        _getUsers()
    },[])

    const _getUsers = () => {
        const _users:User[] = LocalStorageServiceUser.getItem("@Thread",[])
        setUsers(_users)
    }
    const _setUsers = (_users:User[])=>{
        LocalStorageServiceUser.setItem("@User",_users)
        setUsers(_users)
    }
    const createUser:typeof initialState.actions.createUser = (user) => {
        const updatedUsers=[ ...users, user]
        _setUsers(updatedUsers)
    }
    const login:typeof initialState.actions.createUser = (user) => {
        const updatedUsers=[ ...users, user]
        _setUsers(updatedUsers)
    }
    const logout:typeof initialState.actions.createUser = (user) => {
        const updatedUsers=[ ...users, user]
        _setUsers(updatedUsers)
    }
    const actions :typeof initialState.actions={
        createUser,
        login,
        logout
    }
    return(
        <div>
            <UserContext.Provider value={{Users:users,actions}}>
                {children}
            </UserContext.Provider>
        </div>
    )
}
const useUser=()=>{
    const context=useContext(UserContext);
    if (context===undefined) {
        throw new Error('useThread must be used within a threadprovider')
    }
    return context;
}
export{
    UserContextProvider,
    useUser
}