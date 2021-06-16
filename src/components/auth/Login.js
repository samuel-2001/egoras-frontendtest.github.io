import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
// import axios from 'axios';

import '../../css/Login.css';

export const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      {/* <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign Into Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            required
            minLength='6'
          />
        </div>

        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p> */}
      <div>
        <main className="d-flex align-items-center min-vh-100 cpy-3 cpy-md-0">
          <div className="container">
            <div className="card login-card">
              <div className="row no-gutters">
                <div className="col-md-5">
                  <img src="/login-img.jpg" alt="login" className="login-card-img" />
                  {/* <p className="text-white font-weight-medium text-center flex-grow align-self-end footer-link text-small">
                    Free <a href="https://www.bootstrapdash.com/" target="_blank" className="text-white">Bootstrap dashboard templates</a> from Bootstrapdash
                  </p> */}
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <div className="brand-wrapper">
                      <img src="/egoras-favicon.png" width='120' alt="logo" className="logo" />
                    </div>
                    <p className="login-card-description">Sign into your account</p>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                          <label for="email" className="sr-only">Email</label>
                          <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="form-control" 
                            placeholder="Email address"
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            required 
                          />
                        </div>
                        <div className="form-group mb-4">
                          <label for="password" className="sr-only">Password</label>
                          <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="form-control" 
                            placeholder="***********" 
                            value={password}
                            onChange={e => onChange(e)}
                            required
                            minLength='8'
                          />
                        </div>
                        <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Login" />
                      </form>
                      <a href="/change-password" className="forgot-password-link">Change password?</a>
                      <p className="login-card-footer-text">Don't have an account? <a href="#!" className="text-reset">Register here</a></p>
                      <nav className="login-card-footer-nav">
                        <a href="#!">Terms of use.</a>
                        <a href="#!">Privacy policy</a>
                      </nav>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
      </main>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
