import axios from 'axios';

axios.defaults.headers.post['x-access-token'] = localStorage.getItem('jwtoken')

export async function searchAll (searchInput) {
    const {data} = await axios.get('/api/search/'+searchInput)
    if(Array.isArray(data)){
        return {
            type: 'SEARCH_ALL_RESULTS',
            data
        }
    }else{
        return {
            type: 'ERROR',
            details: 'searchAll failed'
        }
    }
    
}

export async function register (userDetsObject) {
    const { data } = await axios.post('/api/register', userDetsObject)
    if(data.error){
        console.log(data);
        return {
            type: 'ERROR',
            error: data.error
        }
    }else{
        localStorage.setItem('jwtoken', data.token)
        axios.defaults.headers.post['x-access-token'] = localStorage.getItem('jwtoken')
        return {
            type: 'REGISTERED_USER',
            email: data.email
        }
    }

}

export async function login (userDetsObject) {
    const { data } = await axios.post('/api/login', userDetsObject)
    if(data.error){
        return {
            type: 'ERROR',
            error: data.error
        }
    }else{
        localStorage.setItem('jwtoken', data.token)
        axios.defaults.headers.post['x-access-token'] = localStorage.getItem('jwtoken')
        return {
            type: 'LOGIN_USER',
            email: data.email
        }
    }

}

export async function checkJWT () {
    const token = localStorage.getItem('jwtoken');
    if(token){
        const {email} = JSON.parse(window.atob(token.split('.')[1]))
        return {
            type: 'LOGIN_USER',
            email
        }
    }    
}

export async function changeCollection (action, payload) {
    const {data} = await axios.post('/api/update',{action, payload})
    console.log(data);
    
}

export function showHideUserDropdown (newStatus) {
    return {
        type: 'USER_DROPDOWN_STATUS_CHANGE',
        status: newStatus
    }
}

