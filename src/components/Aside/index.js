import React from 'react'
import { Link } from 'react-router-dom';
import LogoLogin from "../../assets/img/Login-Best-Pizza.png";
import Pizza from "../../assets/img/Pizza.png";
import { usePizza } from '../../context/PizzaContext';
import LogoutButton from '../LogoutButton/index';

const Aside = () => {
    const { isLoggedin, logout } = usePizza();
    console.log('isLoggedin :>> ', isLoggedin);

    return (
        <aside className="main-aside d-flex flex-column">
            {
                isLoggedin && (
                    <Link
                        to="/">
                        <img
                            src={LogoLogin}
                            alt="best pizza"
                            className="logo-login mt-5"
                        />
                    </Link>
                )
            }
            {
                isLoggedin && (
                    <LogoutButton isAside={true} />
                )
            }
            <img
                src={Pizza}
                alt="pizza"
                className="img-fluid my-auto d-none d-md-block animate__animated animate__rotateIn" />
        </aside>
    )
}
export default Aside