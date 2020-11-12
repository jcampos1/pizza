import axios from "axios";
export const API_URL = '​https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json';

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


// const fetchAndSaveData = () => {
//         setIsLoading(true);
//         const promise = getData();
//         promise
//             .then(response => {
//                 const { stores, users } = response;
//                 setUsers(users);
//                 setStores(stores);
//             })
//             .finally(setIsLoading(false))
//     }