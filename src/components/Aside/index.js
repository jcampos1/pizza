import React from 'react'
import LogoLogin from "../../assets/img/Login-Best-Pizza.png";
import Pizza from "../../assets/img/Pizza.png";

const Aside = () => (
    <aside className="main-aside d-flex">
        {/* <img
            src={LogoLogin}
            alt="best pizza"
            className="img-fluid logo-login"
             /> */}
        <img
            src={Pizza}
            alt="pizza"
            className="img-fluid my-auto" />
    </aside>
)

export default Aside