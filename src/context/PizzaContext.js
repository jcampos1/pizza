import React, { useContext, useMemo, useState, useEffect } from 'react';
import axios from "axios"
import { USERS_KEY, USER_LOCALSTORAGE_KEY } from '../constants';
import { getImage } from '../utils/index';
import { fetchData } from '../api';

const PizzaContext = React.createContext();

// Shared state
export const PizzaProvider = props => {
    const [users, setUsers] = useState([]);
    const [stores, setStores] = useState([]);
    const [allStores, setAllStores] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        if (user)
            setIsLoggedin(true);
    }, []);

    /**
     * Fetch data from api
     * @param {String} queryBy is entity to query
     */
    const getData = (queryBy = USERS_KEY) => {
        setIsLoading(true);
        const promise = fetchData();
        promise.then(res => {
            if (res.status === 200) {
                const items = res.data.response[queryBy];
                if (queryBy === USERS_KEY)
                    setUsers(items);
                else {
                    setStores(items);
                    setAllStores(items);
                }
            }
        }).finally(() => setIsLoading(false));
        return promise;
    }

    /**
     * Search query
     * @param {String} name 
     */
    const applyFilter = name => {
        setIsLoading(true);
        const newStores = allStores.filter(st => {
            const lowName = st.name.toLowerCase();
            const lowSearch = name.toLowerCase();
            if (lowName.includes(lowSearch))
                return st;
        });
        setStores(newStores);
        setIsLoading(false);
    }

    /**
     * Get store by id
     * @param {Number} storeId store id
     */
    const getStoreById = storeId => {
        const promise = new Promise((resolve, reject) => {
            const findIndex = allStores.findIndex(st => st.id === storeId);
            if (findIndex > -1) {
                const store = allStores[findIndex];
                const isStoreImage = false;
                resolve({
                    ...store,
                    products: store.products.map((prod, index) => ({
                        ...prod,
                        image: getImage(index, store.products.length, isStoreImage)
                    })),
                    image: getImage(findIndex, allStores.length)
                });
            } else
                reject("La tienda consultada no se encuentra en el sistema.")
        });

        return promise;
    };

    /**
     * Login user
     * @param {String} email 
     * @param {String} password 
     */
    const login = (email, password) => {
        setIsLoading(true);
        const promise = new Promise((resolve, reject) => {
            const user = users.find(user => user.email === email && user.password === password);
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
            allStores,
            isLoading,
            isLoggedin,
            getData,
            applyFilter,
            getStoreById,
            login,
            logout
        }
    }, [users, stores, allStores, isLoading, isLoggedin]);

    return <PizzaContext.Provider value={value} {...props} />
}

export const usePizza = () => {
    const context = useContext(PizzaContext);
    if (!context)
        throw new Error("usePizza must be inside the PizzaContext provider");
    return context;
}