import React, { useContext, useMemo, useState, useEffect } from 'react';
import axios from "axios"
import { USERS_KEY, USER_LOCALSTORAGE_KEY } from '../constants';

const PizzaContext = React.createContext();

// Shared state
export const PizzaProvider = props => {
    const [users, setUsers] = useState([]);
    const [stores, setStores] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        if(user)    
            setIsLoggedin(true);
    }, []);

    /**
     * Fetch data from api
     * @param {String} queryBy is entity to query
     */
    const fetchData = (queryBy = USERS_KEY) => {
        setIsLoading(true);
        axios({
            url: 'https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json', //your url
            method: 'GET'
        }).then(res => {
            if (res.status === 200) {
                const items = res.data.response[queryBy];
                if (queryBy === USERS_KEY)
                    setUsers(items);
                else
                    setStores(items);
            }
        }).finally(() => setIsLoading(false))
    }

    /**
     * Login user
     * @param {String} email 
     * @param {String} password 
     */
    const login = (email, password) => {
        setIsLoading(true);
        const promise = new Promise((resolve, reject) => {
            const user = users.find(user => user.email === email && user.password === password);
            console.log('user :>> ', user);
            if (user) {
                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
                setIsLoggedin(true);
                resolve(user);
            } else
                reject("Credenciales inválidas.");
        });
        promise.finally(() => setIsLoading(false))
        return promise;

    }
    
    /**
     * Logout user
     */
    const logout = () => {
        setIsLoading(true);
        const promise = new Promise((resolve, reject) => {
            if (isLoggedin) {
                setIsLoggedin(false);
                localStorage.clear();
                resolve(true);
            } else
                reject("El usuario no se encuentra logueado.")
        });
        promise.finally(() => setIsLoading(false))
        return promise;
    }

    // optimization to create an object instance
    const value = useMemo(() => {
        return {
            users,
            stores,
            isLoading,
            isLoggedin,
            fetchData,
            login,
            logout
        }
    }, [users, stores, isLoading, isLoggedin]);

    return <PizzaContext.Provider value={value} {...props} />
}

export const usePizza = () => {
    const context = useContext(PizzaContext);
    if (!context)
        throw new Error("usePizza must be inside the PizzaContext provider");
    return context;
}