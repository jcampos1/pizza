import React, { useEffect, useState } from 'react';
import ItemList from "../../components/ItemList";
import Layout from '../../components/Layout/index';
import Loading from '../../components/Loading/index';
import { STORES_KEY } from '../../constants';
import { usePizza } from '../../context/PizzaContext';

const Separator = ({ title }) => (
    <div className="d-flex align-items-center justify-content-between w-100">
        <hr className="w-75" />
        <h4 className="w-100 mb-0 text-center font-weight-bold">{title}</h4>
        <hr className="w-75" />
    </div>
)
const StoreDetail = ({
    match
}) => {
    const [store, setStore] = useState(null);
    const [isFound, setIsFound] = useState(true);
    const { isLoading, getData, allStores, getStoreById } = usePizza();

    useEffect(() => {
        getData(STORES_KEY);
    }, []);

    useEffect(() => {
        if (allStores && allStores.length > 0) {
            const storeId = parseInt(match.params.storeId);
            getStoreById(storeId)
                .then(response => {
                    setStore(response);
                })
                .catch(err => {
                    setIsFound(false);
                });
        }
    }, [allStores]);

    return (
        <Layout>
            <div className="store-detail">
                {isLoading || isLoading && <Loading />}
                {
                    isFound ? (
                        store && (
                            <>
                                <div className="d-flex flex-column flex-md-row">
                                    <h2 className="font-weight-bold d-block d-md-none">{store.name}</h2>
                                    <img
                                        src={store.image}
                                        alt="store"
                                        className="img-fluid mx-auto ml-md-0 mr-md-3 my-3 my-md-0"
                                        width="120px" />
                                    <div>
                                        <h2 className="font-weight-bold d-none d-md-block">{store.name}</h2>
                                        <p className="mb-0 text-muted">{store.description}</p>
                                        <small>
                                            <img
                                                src="https://img2.freepng.es/20180531/tlf/kisspng-geo-fence-computer-icons-computer-software-black-address-symbols-5b1042e2075502.76792075152779235403.jpg"
                                                alt="point"
                                                width="25px" />
                                            <b>Ubicación:</b>{" "}{store.address}
                                        </small>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <Separator title="Poductos" />
                                </div>
                                {/* PRODUCTS LIST */}
                                <ItemList
                                    items={store.products}
                                    isRedirect={false} />
                            </>
                        )
                    ) : (
                            <span>La tienda no se encuentra en el sistema</span>
                        )
                }

                {/* <div
                    className="d-flex flex-wrap">
                    {
                        stores.length > 0 ? (
                            stores.map((item, index) => (
                                <div
                                    key={`store${index}`}
                                    className="mx-auto ml-md-0 mr-md-4 mb-4">
                                    <ItemPizza
                                        {...item} />
                                </div>
                            ))
                        ) : (
                                <span>Sin resultados</span>
                            )
                    }
                </div> */}

            </div>
        </Layout >
    )
}

export default StoreDetail