import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../api';

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserProvider = ({children}) => {
    const [users, setUsers] = useState([]);

    const getUser = async (id) => {
       let {data} = await api.get(`/${id}`);
       return data
    };

    useEffect(()=>{
        const getUsers = async () => {
            const response = await api.get("/");
            const responseArr = Object.values(response.data);
            setUsers(responseArr);
        };
        return getUsers;
    }, []);

    const value = {
        users,
        getUser
    };

    // context
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
};