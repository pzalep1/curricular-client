import { useState } from 'react';

export default function SettUser() {
    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const userObject = JSON.parse(userString);
        return userObject
    };
  
    const [user, setUser] = useState(getUser());

    const saveUser = userObject => {
        sessionStorage.setItem('user', JSON.stringify(userObject));
        setUser(userObject);
    };

    return {
        setUser: saveUser,
        user
    }
}