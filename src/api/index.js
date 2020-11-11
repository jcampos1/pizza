import axios from "axios";
export const API_URL = '​https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json';

/**
 * Fetch to api
 */
export const getData = () => {
    const promise  = axios({ url: '​https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json', method: 'GET' });
    promise.then(res => {
        console.log('ressss :>> ', res);
    })
    return promise;
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