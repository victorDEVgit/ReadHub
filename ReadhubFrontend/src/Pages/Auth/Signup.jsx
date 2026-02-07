import React, { useState } from 'react'
import "../Auth/Signup.css"
import { useNavigate } from 'react-router-dom';
import { validateEmail } from './validate';
import { ReadHubImages } from '../../assets/asset';

const Signup = () => {

  const navigate = useNavigate();

  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


   const handleSubmit = (e) => {

    e.preventDefault();
    setLoading(true);

    // call signup API

    // end signup API

    // basic validation
        if(!name.trim()){
            setError("Please enter your full name");
            setLoading(false);
            return;
        }
        if(!validateEmail(email)){
            setError("Please enter your email address");
            setLoading(false);
            return;
        }
        if(!password.trim()){
            setError("Please enter your password");
            setLoading(false);
            return;
        }
        setError("");

   }

  return (
    <>
    <div className="signup">
      <div className="signupContent">
        <div className="header">
          <span className="heading">Create an Account</span>
          <span className="subheading">Signup to start reading instantly</span>
        </div>


          <form action={handleSubmit} className='signupForm'>

            <div className="inputFields">

            <div className='field'>
              <label htmlFor="">Username</label>
              <input type="text" 
              id='name'
              className='form-control'
              placeholder='Johnny D'
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              />
            </div>

            <div className='field'>
              <label htmlFor="">Email</label>
              <input type="text" 
              id='email'
              className='form-control'
              placeholder='example@gmail.com'
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              />
              </div>

              <div className='field'>
              <label htmlFor="">Password</label>
              <input type="password" 
              id='password'
              className='form-control'
              placeholder='********'
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              />
            </div>

            <div className='field'>
              <label htmlFor="">Confirm Password</label>
              <input type="password" 
              id='confirmPassword'
              className='form-control'
              placeholder='********'
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              />
            </div>

            {error && (
                        <p className="errorText" style={{color: red, alignItems: center, backgroundColor: none}}>
                            {error}
                        </p>
            )}

            <button type="submit" className="submitButton">
              <span>Create Account</span>
            </button>

            <div className="separator">
              <hr className="short-line" />
              <span>Or continue with</span>
              <hr className="short-line" />
            </div>

            <div className="icons">
                <span><img className='googleImg' src={ReadHubImages.GoogleIcon} alt="Google login" /></span>
                <span><img className='googleImg' src={ReadHubImages.AppleIcon} alt="Apple login" /></span>
            </div>

            <div className="loginOption">
              <span style={{color: '#4d4d4d'}}>Already have an account?</span>
              <span onClick={()=> navigate("/login")} style={{color: "#2D7FF9"}}>Sign In</span>
            </div>

            </div>
          </form>
      </div>
    </div>
    </>
  )
}

export default Signup