import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { validateEmail } from './validate';

const NewPassword = () => {

       const navigate = useNavigate();

  const [createPassword, setCreatePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


   const handleSubmit = (e) => {

    e.preventDefault();
    setLoading(true);

    // call createnewpassword API

    // end createnewpassword API

    // basic validation
        if(!password.trim()){
            setError("Please enter your password");
            setLoading(false);
            return;
        }
        setError("");

   }

  return (
    <>
    <div style={{justifyContent: "start", paddingTop: "8rem"}} className="signup">
      <div className="signupContent">
        <div className="header">
          <span className="heading">Create New Password</span>
          <span className="subheading">Set a new password to continue</span>
        </div>


          <form action={handleSubmit} className='signupForm'>

            <div className="inputFields">

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
              <label htmlFor="">Confirm New Password</label>
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

            <div className="submitButton">
              <span style={{padding: ".8rem 9rem", fontSize: "1rem"}}>Sign in</span>
            </div>

        </div>
          </form>
      </div>
    </div>
    </>
  )
}

export default NewPassword