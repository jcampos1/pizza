import React from 'react';
import Loading from '../../components/Loading/index';
import Layout from '../../components/Layout/index';
import { usePizza } from '../../context/PizzaContext';
import LogoutButton from '../../components/LogoutButton/index';

const StoreList = () => {
    const { isLoading, fetchData, logout } = usePizza();

    return (
        <Layout>
            {isLoading || isLoading && <Loading />}
            <div className="d-flex justify-content-end">
                <LogoutButton />
            </div>
        </Layout>
    )
}

export default StoreList