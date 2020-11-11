import React from 'react'
import { Container } from 'reactstrap'
import Aside from '../Aside'
import MainContent from '../MainContent'

const Layout = ({
    children,
    isLogin = false
}) => (
        <div className="">
            <Aside />
            <MainContent isLogin={isLogin}>
                {children}
            </MainContent>
        </div>
    )

export default Layout