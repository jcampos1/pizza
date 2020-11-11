import React from 'react'
import { Container } from 'reactstrap'

const MainContent = ({
    children
}) => (
        <section className="main-content h-100">
            <Container className="h-100 px-md-5 my-5">
                {children}
            </Container>
        </section>

    )

export default MainContent