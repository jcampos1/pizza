import React from 'react'
import { Container } from 'reactstrap'
import Aside from '../Aside'
import MainContent from '../MainContent'

const Layout = ({
    children
}) => (
    <div className="">
        <Aside />
        <MainContent>
            {children}
        </MainContent>
    </div>
)

export default Layout