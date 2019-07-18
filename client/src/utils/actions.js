import axios from 'axios';

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