import axios from 'axios';

export const API_SERVER = 'http://127.0.0.1:8000'

function checkStatus(response){
    if(response.status >= 200 && response.status < 300){
        return response.data;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw response;
}

function renderErrors(response){
    if(response.response === undefined){
        // eslint-disable-next-line
        throw{
            type: 'error',
            message: 'Error no controlado.'
        }
    }else{
        throw response.response.data;
    }
}

/**
 * @param {string} url 
 * @param {object} options 
 */
export function request(url, options = {method: 'get'}){
    options['Content-Type'] = 'application/json';
    options['Accept'] = 'application/json';

    const tkn = localStorage.getItem('tkn');
    if(tkn){
        options['headers'] = { Authorization: `Token ${tkn}`};
    }

    return axios({
        url: url,
        baseURL: API_SERVER,
        ...options
    }).then(checkStatus).catch(renderErrors);
}

/**
 * @param {string} url 
 * @param {object} body 
 */
export function post(url, body){
    const options = {
        method: 'post',
        data: body,
    };
    return request(url, options);
}

/**
 * @param {string} url 
 */
export function get(url){
    const options = {
        method: 'get'
    };
    return request(url, options);
}
