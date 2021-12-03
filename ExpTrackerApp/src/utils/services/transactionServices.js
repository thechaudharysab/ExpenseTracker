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
        "TransactionType": trasactionData.TransactionType,
        "TransactionCurrency": trasactionData.TransactionCurrency,
        "TransactionAmount": trasactionData.TransactionAmount,
        "TransactionTitle": trasactionData.TransactionTitle,
        "TransactionDescription": trasactionData.TransactionDescription,
        "TransactionDate": trasactionData.TransactionDate,
        "TransactionDateAdded": trasactionData.TransactionDateAdded,
        "TransactionDateModified": trasactionData.TransactionDateModified
    }

    return new Promise((resolve, reject) => {
        axios.post(url, data).then((tPostResponse) => {
            resolve(tPostResponse.data);
        }).catch((error) => {
            reject(error);
        })
    })

}

function deleteTransaction(transactionId) {

    let url = SERVICE_URLS.API_URL + '/transactions/' + transactionId

    return new Promise((resolve, reject) => {
        axios.delete(url).then((tPostResponse) => {
            resolve(tPostResponse.data);
        }).catch((error) => {
            reject(error);
        })
    })

}

export default {
    getAllTransactions,
    postNewTransaction,
    deleteTransaction
};