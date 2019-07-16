import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Header';
import Search from './Search';
import axios from 'axios'
import PrivateRoute from './PrivateRoute';
import User from './User';
import LoginButton from './LoginForm';

function Main() {

    const [searchInput, setSearchInput] = useState('')
    const [searchItems, setSearchItems] = useState([])

    useEffect(() => {
        const x = setTimeout(() => {
            searchAll(searchInput)
            .then(results => {
                if(results !== null) setSearchItems(results)
            })
        },500)
        return () => {clearTimeout(x)}
    },[searchInput])

    useEffect(()=>{
       
    },[searchItems])

    return (
      <BrowserRouter>
        <>
          <Header searchInput={searchInput} setSearchInput={setSearchInput}/>
          <Search searchItems={searchItems}/>
          <Route exact path='/login' component={LoginButton} />
          <PrivateRoute exact path='/user' component={User} loggedIn={false}/>
          
  
        </>
      </BrowserRouter>
    )
  }

export default Main

async function searchAll (searchInput) {
    if(searchInput.trim() === '') return
    const {data} = await axios.get('/api/search/'+searchInput)
    if(Array.isArray(data)){
        return data
    }else{
        return null
    }
    
}