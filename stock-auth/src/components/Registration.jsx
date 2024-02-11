import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { buildErrorMessage } from 'vite';
import bgimage from './images/reg-login.jpg'
import './reg.css'

export default function Registration() {

    const [id, newId] = useState('');
    const [name, newName] = useState('');
    const [password, newPassword] = useState('');
    const [email, newEmail] = useState('');
    const [phone, newPhone] = useState('');
    const [country, newCountry] = useState('India');
    const [address, newAddress] = useState('');
    const [gender, newGender] = useState('');


    const IsValid = () => {
        let RightToProceed = true;
        let errormessage = "Please fill out ";
        if(id===null || id===''){
            RightToProceed = false;
            errormessage += ' Username';
        }
        if(name===null || name===''){
            RightToProceed = false;
            errormessage += ' Full Name';
        }
        if(password===null || password===''){
            RightToProceed = false;
            errormessage += ' Password';
        }
        if(email===null || email===''){
            RightToProceed = false;
            errormessage += ' E-mail';
        }
        if(phone===null || phone===''){
            RightToProceed = false;
            errormessage += ' Phone';
        }
        if(!RightToProceed){
            toast.warning(errormessage)
        }
        else{
            if(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]\.[A-Za-z]+$/.test(email)){

            }else{
                RightToProceed = false;
                toast.warning("Please enter the valid email!")
            }
        }
        return RightToProceed;
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
            e.preventDefault();
            let localObject = {id, name, password, email, phone, country, address, gender}
            // const obj = [{"id":1, "password":'jdksjdkjsdkhsk'}]
            if(IsValid()){
            fetch("http://localhost:3000/user", {
                method:"POST",
                headers: {'content-type':'application/json'},
                body: JSON.stringify(localObject)
            }).then((res)=>{
                toast.success("Registered Successfully!")
                navigate('./login')
            }).catch((err)=>{
                toast.error("Could Not be Able to register! Try after few minutes!", err.message)
            });
        }
        // console.log(localObject);
    }

    const mainBG = ``

    
  return (
    <div className='main-contenttt' style={{backgroundImage:`url(${bgimage})`, backgroundSize:'cover'}}>
        <div className='col-lg-12'>
            <form className='container '  onSubmit={handleSubmit}>
                <div className='card1' >
                    <div className='card-header'>
                         <h2>Registration is three broo</h2>
                    </div>

                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label>User Name? <span className='errmsg'>*</span></label>
                                    <input value={id} onChange={e=>newId(e.target.value)} className='form-control' ></input>
                                </div>
                            </div>

                             <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label>Password <span className='errmsg'>*</span></label>
                                    <input value={password} onChange={e=>newPassword(e.target.value)} type='password' className='form-control' ></input>
                                </div>
                            </div>

                             <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label>Full Name <span className='errmsg'>*</span></label>
                                    <input value={name} onChange={e=>newName(e.target.value)} className='form-control' ></input>
                                </div>
                            </div>

                             <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label>E-mail<span className='errmsg'>*</span></label>
                                    <input value={email} onChange={e=>newEmail(e.target.value)} className='form-control' ></input>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label>Phone No.<span className='errmsg'>*</span></label>
                                    <input value={phone} onChange={e=>newPhone(e.target.value)} className='form-control' ></input>
                                </div>
                            </div>

                             <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label>Country <span className='errmsg'>*</span></label>
                                    <select value={country} onChange={e=>newCountry(e.target.value)} className='form-control' >
                                        <option value='India'>India</option>
                                        <option value='Nepal'>Nepal</option>
                                        <option value='Australia'>Australia</option>
                                        <option value='England'>England</option>
                                        <option value='Sri Lanka'>Sri Lanka</option>
                                    </select>
                                </div>
                            </div>

                             <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Address</label>
                                    <textarea value={address} onChange={e=>newAddress(e.target.value)} className='form-control'></textarea>
                                </div>
                            </div>

                             <div className='col-lg-6'>
                                <div className='form-group '>
                                    <label>Gender<span className='errmsg' >*</span></label>
                                    <br></br>
                                    <input className='app-check' checked={gender==='male'} onChange={e=>newGender(e.target.value)} type='radio' name='gender' value='male'></input>
                                    <label>Male</label>
                                     <input className='app-check' checked={gender==='female'} onChange={e=>newGender(e.target.value)} type='radio' name='gender' value='female'></input>
                                    <label>Female</label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='card-footer'>
                        <button type='submit' className='btn btn-primary '> Register here!</button>
                        <a className='btn btn-danger mx-2'>Back</a>
                    </div>
                </div>
            </form>
        </div>
      {/* <h2>Registration is three broo</h2> */}
    </div>
  )
}


// ElementInternals {
//                 position: "top-center",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//                 transition: Bounce,
//                 }