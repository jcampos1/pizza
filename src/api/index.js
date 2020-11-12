import axios from "axios";

/**
 * Fetch to api
 */
export const fetchData = () => {
    const promise = axios({
        url: 'https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json', //your url
        method: 'GET'
    });
    return promise
};