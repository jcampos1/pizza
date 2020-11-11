import React from 'react'
import { usePizza } from '../../context/PizzaContext'
import ic_contrasena from "../../assets/img/ic_contrasena.png";
import { useHistory } from 'react-router-dom';

const LogoutButton = ({
    isAside = false
}) => {
    const { logout } = usePizza();
    const history = useHistory();

    const onLogoutClick = ({ }) =>
        logout().then(() => history.push("/"))

    return (
        <>
            {
                isAside ? (
                    <div
                        onClick={onLogoutClick}
                        className="font-weight-bold text-white text-center mt-3 d-block d-md-none c-pointer hvr-grow">Salir</div>
                ) : (
                        <div
                            onClick={onLogoutClick}
                            className="d-none d-md-inline-flex align-items-center c-pointer">
                            <img
                                src={ic_contrasena}
                                alt="logout"
                                className="mr-2"
                            />
                            <span className="text-muted">Salir</span>
                        </div>
                    )
            }
        </>
    )
}

export default LogoutButton