import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { usePizza } from '../../context/PizzaContext'
import { Footer } from '../Footer'
import SearchBar from '../SearchBar'
import LogoutButton from '../LogoutButton/index';

const MainContent = ({
    children,
    isLogin = false,
    isSearchBar = false
}) => {
    const { isLoggedin } = usePizza();

    return (
        <section className={`main-content ${isLogin ? "main-content-login" : ""} h-100 d-flex flex-column`}>
            <Container className={`${isLoggedin ? "h-auto" : "h-100"} px-md-5 mt-5 mb-auto`}>
                {
                    isLoggedin && (
                        <Row className="mb-3">
                            {
                                isSearchBar && (
                                    <Col
                                        className="d-flex align-items-center order-2 order-md-1"
                                        md="8">
                                        <SearchBar />
                                    </Col>
                                )
                            }
                            <Col
                                className="d-flex align-items-center justify-content-md-end order-1 order-md-2 mb-3"
                                md={isSearchBar ? "4" : "12"}>
                                <LogoutButton />
                            </Col>
                        </Row>
                    )
                }
                {children}
            </Container>
            {
                isLoggedin && (
                    <div className="mt-auto">
                        <Footer />
                    </div>
                )
            }
        </section>
    )
}

export default MainContent