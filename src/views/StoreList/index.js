import React, { useEffect } from 'react';
import ItemList from "../../components/ItemList";
import Layout from '../../components/Layout/index';
import Loading from '../../components/Loading/index';
import { STORES_KEY } from '../../constants';
import { usePizza } from '../../context/PizzaContext';
import { getImage } from '../../utils/index';

const StoreList = () => {
    const { isLoading, getData, stores: _stores } = usePizza();

    useEffect(() => {
        getData(STORES_KEY);
    }, []);

    const length = _stores.length;
    const stores = _stores.map((item, index) => ({
        ...item,
        image: getImage(index, length)
    }));

    return (
        <Layout isSearchBar={true}>
            <div className="store-list">
                {isLoading || isLoading && <Loading />}
                <span className="text-muted px-2 line-bottom">Pizzerías</span>
                <div className="my-5">
                    <h2 className="font-weight-bold">Tiendas</h2>
                    <p className="mb-0 text-muted">Escoge tu pizza favorita</p>
                </div>
                {/* STORE LIST */}
                <ItemList items={stores} />
            </div>
        </Layout >
    )
}

export default StoreList