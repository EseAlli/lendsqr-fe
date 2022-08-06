import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../api';

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const getUsers = async () => {
            const response = await api.get("/");
            const responseArr = Object.values(response.data);
            setUsers(responseArr);
        };
        return getUsers;
    }, []);

    const value = {
        users
    };

    // context
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
};