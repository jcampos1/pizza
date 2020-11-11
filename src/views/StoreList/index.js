import "animate.css";
import React, { useEffect } from 'react';
import Layout from '../../components/Layout/index';
import Loading from '../../components/Loading/index';
import LogoutButton from '../../components/LogoutButton/index';
import SearchBar from "../../components/SearchBar";
import { STORES_KEY } from '../../constants';
import { usePizza } from '../../context/PizzaContext';
import { getImage } from '../../utils/index';

const ItemPizza = ({
    image,
    alt,
    name,
    address
}) => {
    return (
        <div className="animate__animated animate__rubberBand">
            <div className="d-flex flex-column c-pointer hvr-grow">
                <img src={image} alt={alt} className="" />
                <div className="mt-3">{name}</div>
                <small className="text-muted">{address}</small>
            </div>
        </div>
    )
}

const StoreList = () => {
    const { isLoading, fetchData, stores: _stores } = usePizza();

    useEffect(() => {
        fetchData(STORES_KEY);
    }, []);

    const length = _stores.length;
    const stores = _stores.map((item, index) => ({
        ...item,
        image: getImage(index, length)
    }));

    return (
        <Layout>
            <div className="store-list">
                {isLoading || isLoading && <Loading />}
                <div className="d-flex justify-content-between align-items-center">
                    {/* <SearchBar /> */}
                    <LogoutButton />
                </div>
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                            <>
                                <span className="text-muted px-2 line-bottom">Pizzerías</span>
                                <div className="my-5">
                                    <h2 className="font-weight-bold">Tiendas</h2>
                                    <p className="mb-0 text-muted">Escoge tu pizza favorita</p>
                                </div>
                                <div
                                    className="d-flex flex-wrap">
                                    {
                                        stores.length > 0 ? (
                                            stores.map((item, index) => (
                                                <div
                                                    key={`store${index}`}
                                                    className="mr-md-4 mb-4">
                                                    <ItemPizza
                                                        {...item} />
                                                </div>
                                            ))
                                        ) : (
                                                <span>Sin resultados</span>
                                            )
                                    }
                                </div>
                            </>
                        )
                }
            </div>
        </Layout>
    )
}

export default StoreList