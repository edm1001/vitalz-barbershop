import { render } from '@testing-library/react';
import React from 'react';
import Logo from '../assets/small/vb-logo.png'

class Login extends React.Component{
    state={
        email:'',
        pwd: ''
    }
}
handleChange = (e) =>{
    const {name, value} = e.target
}
handleSubmit = (e) =>{

}
render(){
    return (
        <div>
            <div className='login-container'>
            <Logo/>    
            </div>
            <div>
                <form onSubmit>
                    <input type='email' name='email' placeholder='email' required onChange/>
                    <input type='password'name='password'placeholder='password' required onChange/>
                    <button onSubmit> Log In</button>
                </form>
            </div>
        </div>
    )
}
export default Login;