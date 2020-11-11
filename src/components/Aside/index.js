import React from 'react'
import LogoLogin from "../../assets/img/Login-Best-Pizza.png";
import Pizza from "../../assets/img/Pizza.png";
import { usePizza } from '../../context/PizzaContext';

const Aside = () => {
    const { isLoggedin, logout } = usePizza();
    console.log('isLoggedin :>> ', isLoggedin);

    return (
        <aside className="main-aside d-flex flex-column">
            {
                isLoggedin && (
                    <img
                        src={LogoLogin}
                        alt="best pizza"
                        className="logo-login mt-5"
                    />
                )
            }
            <img
                src={Pizza}
                alt="pizza"
                className="img-fluid my-auto" />
        </aside>
    )
}
export default Aside