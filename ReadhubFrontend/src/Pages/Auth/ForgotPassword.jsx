import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { validateEmail } from './validate';

const ForgotPassword = () => {

    const navigate = useNavigate();

  const [resetPassword, setResetPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


   const handleSubmit = (e) => {

    e.preventDefault();
    setLoading(true);

    // call resetpassword API

    // end resetpassword API

    // basic validation
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
    <div className="signup" style={{justifyContent: "start"}}>
      <div className="signupContent" style={{marginTop: "8rem"}}>
        <div className="header">
          <span className="heading">Forgot Password</span>
          <span className="subheading">Enter your email to reset your password</span>
        </div>


          <form action={handleSubmit} className='signupForm'>

            <div className="inputFields">

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

            {/* <div style={{justifyContent: "end", marginLeft: "12rem"}}>
                <span style={{color: "#2d7ff9"}} onClick={()=>navigate("/forgotpassword")}>Forgot Password?</span>
            </div> */}

            {error && (
                        <p className="errorText" style={{color: red, alignItems: center, backgroundColor: none}}>
                            {error}
                        </p>
            )}

            <div onClick={()=>navigate("/otp")} className="submitButton">
              <span style={{padding: ".8rem 7.5rem", fontSize: "1rem"}}>Request OTP</span>
            </div>

        </div>
          </form>
      </div>
    </div>
    </>
  )
}

export default ForgotPassword