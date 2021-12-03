import axios from "axios";
import { SERVICE_URLS } from "../constants";

function getAllTransactions() {

    let url = SERVICE_URLS.API_URL + '/transactions';

    return new Promise((resolve, reject) => {
        axios.get(url).then((allTransactions) => {
            resolve(allTransactions.data);
        }).catch((error) => {
            reject(error);
        })
    })
}

function postNewTransaction(trasactionData) {

    let url = SERVICE_URLS.API_URL + '/transactions'
    let data = {
        "TransactionType": "Income",
        "TransactionCurrency": "RM",
        "TransactionAmount": 29.22,
        "TransactionTitle": "Demo Title coming from API",
        "TransactionDescription": "Demo Desc coming from the API",
        "TransactionDate": "2021-12-03T11:20:20.602Z",
        "TransactionDateAdded": "2021-12-03T11:20:20.602Z",
        "TransactionDateModified": "2021-12-03T11:20:20.602Z"
    }

    return new Promise((resolve, reject) => {
        axios.post(url, data).then((tPostResponse) => {
            resolve(tPostResponse.data);
        }).catch((error) => {
            reject(error);
        })
    })

}

export default {
    getAllTransactions,
    postNewTransaction,
};