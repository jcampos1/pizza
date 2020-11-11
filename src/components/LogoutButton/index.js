import React from 'react'
import { usePizza } from '../../context/PizzaContext'
import ic_contrasena from "../../assets/img/ic_contrasena.png";
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
    const { logout } = usePizza();
    const history = useHistory();

    const onLogoutClick = () =>
        logout().then(() => history.push("/"))

    return (
        <div
            onClick={onLogoutClick}
            className="d-inline-flex align-items-center c-pointer hvr-grow">
            <img
                src={ic_contrasena}
                alt="logout"
                className="mr-2"
            />
            <span className="text-muted">Salir</span>
        </div>
    )
}

export default LogoutButton