import axios from 'axios'

export const baseUrl = "http://localhost:3001/api/";

const timeout = 30000;

export const postSource = async (source) => {
    let apiUrl = baseUrl + "sources";
    return axios.post(apiUrl, source, { timeout: timeout }) //30s posting
    //just await and maybe catch error
};

export const login = async credentials => {
    let apiUrl = baseUrl + "login";
    return axios.post(apiUrl, credentials, { timeout: timeout })
}

export const getHome = async () => {
    let apiUrl = baseUrl + "home";
    return axios.get(apiUrl, { timeout: timeout });

};



