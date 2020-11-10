import React from 'react'
import { Container } from 'reactstrap'

const MainContent = ({
    children
}) => (
        <section className="main-content h-100">
            <Container className="h-100">
                {children}
            </Container>
        </section>

    )

export default MainContent