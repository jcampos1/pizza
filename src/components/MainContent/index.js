import React from 'react'
import { Container } from 'reactstrap'
import { usePizza } from '../../context/PizzaContext'
import { Footer } from '../Footer'

const MainContent = ({
    children
}) => {
    const { isLoggedin } = usePizza();
    return (
        <section className="main-content h-100 d-flex flex-column">
            <Container className={`${isLoggedin ? "h-auto" : "h-100"} px-md-5 mt-5 mb-auto`}>
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