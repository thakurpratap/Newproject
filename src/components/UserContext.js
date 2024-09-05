import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [currentuser, SetCurrentuser] = useState([])

    const addUser = (userData) => {
        // const userExists = users.some(user => user.email === userData.email);
        // console.log('Checking if user exists:', userData);
        const userExists = users.some(user => user.firstname === userData.firstname  && user.email === userData.email && user.password === userData.password);
        if (userExists) {
            return { error: "This email ID already exists. Please go to sign-in page." };
        }
        setUsers([...users, userData]);
        SetCurrentuser(userData)
        return { success: true };
    };

   const Exitsuser = (userData) => {
    // const presentuser = users.some (user => user.firstname === userData.firstname  && user.email === userData.email && user.password === userData.password)
    const presentuser = users.find(user => user.email === userData.email);
    if (presentuser) {
        if (presentuser.password === userData.password) {
            SetCurrentuser(presentuser);
            return { success: true };
        } else {
            return { error: "Incorrect password. Please try again." };
        }
    } else {
        return { error: "This email ID does not exist. Please go to the Registration page." };
    }
      }
    const logoutUser = () => {
        // SetCurrentuser(null);
    };

    return (
        <UserContext.Provider value={{ users,Exitsuser, currentuser, addUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
}