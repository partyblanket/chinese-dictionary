import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { register, login } from '../utils/actions';


function LoginForm(props) {


  const [registerDets, setRegisterDets] = useState({email: '', password:''});

  const [loginDets, setLoginDets] = useState({email: '', password:''});

  const [regestering, setRegestering] = useState(false);

  const { from } = props.location.state || {
    from: { pathname: "/" },
  }; 

  if (props.username) {
    return <Redirect to={from} />;
  };

  const handleChange = (e) => {
    if(e.target.parentElement.id === 'login-form'){
        setLoginDets({...loginDets, [e.target.name]: e.target.value})
    }else if(e.target.parentElement.id === 'register-form'){
        setRegisterDets({...registerDets, [e.target.name]: e.target.value})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(e.target.id === 'login-form'){
      props.dispatch(login(loginDets));
      
    }else if(e.target.id === 'register-form'){
      props.dispatch(register(registerDets));
    } 
    
  }


  const loginEl = (
      <div className="login-page">
        <div className="form">
          <form id="login-form" onSubmit={handleSubmit}>
            <input name='email' type="email" value={loginDets.email} onChange={handleChange} placeholder="email"/>
            <input name='password' type="password" value={loginDets.password} onChange={handleChange} placeholder="password"/>
            <button>login</button>
            <p className="message">Not registered? </p><p className='link' onClick={() => {setRegestering(true)}}> Create an account</p>
          </form>
        </div>
      </div>

  )

  const registerEl = (
    <div className="login-page">
      <div className="form">
        <form id="register-form" onSubmit={handleSubmit}>
          <input name='email' type="email" value={registerDets.email} onChange={handleChange} placeholder="email"/>
          <input name='password' type="password" value={registerDets.password} onChange={handleChange} placeholder="password"/>
          <button>register</button>
          <p className="message">Already registered? </p><p className='link' onClick={() => {setRegestering(false)}}>Sign In</p>
        </form>
      </div>
    </div>
  )

  return (
    <>
      <div className='cover' />
      {regestering ? registerEl : loginEl}
    </>
    
  )
}

function mapStateToProps(state) {
  return {
  };
};

export default connect(mapStateToProps)(LoginForm)