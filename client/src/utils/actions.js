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