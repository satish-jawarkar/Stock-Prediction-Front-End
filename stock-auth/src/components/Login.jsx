import React, { useState } from 'react'
// import registration from './Registration';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {

  const [username, updatedUsername] = useState('');
  const [password, updatedPassword] = useState('');

  const proceed = (e) => {
    e.preventDefault();
    if(validate()){
      fetch('http://localhost:3000/user/'+username).then((res)=>{
        return res.json();
      }).then((resp)=>{
        if(Object.keys(resp).length === 0){
          toast.error("Please Enter Valid Username!")
        }else{
          if(resp.password === password){

          }else{
            toast.error("Please Enter Valid Credentials!!")
          }
        }
        console.log(resp)
      }).catch((err)=>{
        toast.error("Invalid Login"+err.message)
      });
    }
  }

  const validate = () => {
    let result = true;
    if(username === '' || username === null){
      result = false;
      toast.warning("Please enter username !");
    }
    if(password === '' || password === null){
      result = false;
      toast.warning("Password is empty ");
    }
    return result;
  }
  return (
    <div>
      <div className='row'>
        <div className='col-lg-12'>
          <form onSubmit={proceed} className='container'>
            <div className='card'>
              <div className='card-header'>
                <h2>Login</h2>
              </div>
              <div className='card-body'>
                <div className='form-group'>
                  <label>Username <span className='errmsg'>*</span></label>
                  <input type='text' value={username} onChange={e=>updatedUsername(e.target.value)} className='form-control'></input>
                </div>
                <div className='form-group'>
                  <label>password <span className='errmsg'>*</span></label>
                  <input type='password' value={password} onChange={e=>updatedPassword(e.target.value)} className='form-control'></input>
                </div>
              </div>
              <div className='card-footer'>
                <button type='submit' className='btn btn-primary'> Login</button>
                <Link className='btn btn-success mx-3' to={'/registration'}> New User? Click Here </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
