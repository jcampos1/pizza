import React from 'react'
import { Link } from 'react-router-dom';
import BestPizza from "../../assets/img/Best-Pizza.png";

export const Footer = () => (
    <footer
        style={{ backgroundColor: "black" }}
        className="container d-flex align-items-center justify-content-between py-3 px-md-5">
        <div className="d-flex align-items-center">
            <a href="https://www.facebook.com/MUYRestauranteCol/" target="_blank">
                <img
                    src="https://www.freeiconspng.com/uploads/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png--32.png"
                    alt="face"
                    className="mr-3 hvr-wobble-top"
                    style={{ width: "40px" }} />
            </a>
            <a href="https://www.instagram.com/muyrestaurantecol/" target="_blank">
                <img
                    src="https://www.missoulaunitedway.org/sites/missoulaunitedway.org/files/instagram%20white.png"
                    alt="instagram"
                    style={{ width: "30px" }}
                    className="hvr-wobble-top" />
            </a>
        </div>
        <Link to="/">
            <img
                src={BestPizza}
                alt="best pizza"
                style={{ width: "50px" }} />
        </Link>
    </footer>
)
