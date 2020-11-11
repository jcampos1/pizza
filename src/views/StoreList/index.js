import "animate.css";
import React, { useEffect } from 'react';
import { Col, Row } from "reactstrap";
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
                <img src={image} alt={alt} className="img-fluid" />
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
                <Row className="mb-5">
                    <Col
                        className="d-flex align-items-center order-2 order-md-1"
                        md="8">
                        <SearchBar />
                    </Col>
                    <Col
                        className="d-flex align-items-center justify-content-md-end order-1 order-md-2 mb-3"
                        md="4">
                        <LogoutButton />
                    </Col>
                </Row>
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
                                                    className="mx-auto ml-md-0 mr-md-4 mb-4">
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
        </Layout >
    )
}

export default StoreList