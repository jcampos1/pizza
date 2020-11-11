import React, { useContext, useMemo, useState } from 'react';
// import { api } from '../api';
import { API_URL } from '../api/index';
import axios from 'axios';

const PizzaContext = React.createContext();

// Shared state
export const PizzaProvider = props => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [stores, setStores] = useState([]);

    const fetchData = () => {
        setIsLoading(true);
        // console.log('api :>> ', api);
        fetch(API_URL)
          .then(res => {
            console.log('res :>> ', res);
        }).finally(() => setIsLoading(false));
    }

    // optimization to create an object instance
    const value = useMemo(() => {
        return {
            users,
            stores,
            fetchData,
            isLoading
        }
    }, [users, isLoading]);

    return <PizzaContext.Provider value={value} {...props} />
}

export const usePizza = () => {
    const context = useContext(PizzaContext);
    if (!context)
        throw new Error("usePizza must be inside the PizzaContext provider");
    return context;
}