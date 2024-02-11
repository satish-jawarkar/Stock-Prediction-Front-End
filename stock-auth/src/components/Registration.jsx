import React from 'react'

export default function Registration() {
  return (
    // <div className='main-content'>
        <div className='col-lg-12'>
            <form className='container'>
                <div className='card'>
                    <div className='card-header'>
                         <h2>Registration is three broo</h2>
                    </div>

                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label>User Name? <span className='errmsg'>*</span></label>
                                    <input className='form-control'></input>
                                </div>
                            </div>

                             <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label>Password <span className='errmsg'>*</span></label>
                                    <input className='form-control'></input>
                                </div>
                            </div>

                             <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label>Full Name <span className='errmsg'>*</span></label>
                                    <input className='form-control'></input>
                                </div>
                            </div>

                             <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label>E-mail<span className='errmsg'>*</span></label>
                                    <input className='form-control'></input>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label>Phone No.<span className='errmsg'>*</span></label>
                                    <input className='form-control'></input>
                                </div>
                            </div>

                             <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label>Country <span className='errmsg'>*</span></label>
                                    <select className='form-control'>
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
                                    <textarea className='form-control'></textarea>
                                </div>
                            </div>

                             <div className='col-lg-6'>
                                <div className='form-group '>
                                    <label>Gender<span className='errmsg'>*</span></label>
                                    <br></br>
                                    <input className='app-check' type='radio' name='gender' value='male'></input>
                                    <label>Male</label>
                                     <input className='app-check' type='radio' name='gender' value='female'></input>
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
        {/* </div> */}
      {/* <h2>Registration is three broo</h2> */}
    </div>
  )
}
