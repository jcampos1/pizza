import React from 'react'
import { Container } from 'reactstrap'

const MainContent = ({
    children
}) => (
    <Container className="main-content">
        {children}
    </Container>
)

export default MainContent