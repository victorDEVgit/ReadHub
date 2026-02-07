import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Otp = () => {

  const navigate = useNavigate();

  const inputRef = useRef([]);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    e.target.value = value;
    if(value && index < 5){
    inputRef.current[index + 1].focus();
    }
  }

  const handleKeyDown = (e, index) => {
    if(e.key === "Backspace" && !e.target.value && index > 0){
      inputRef.current[index - 1].focus();
    }
  }

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").slice(0, 6).split("");
    paste.forEach((digit, i) => {
      if(inputRef.current[i]){
        inputRef.current[i].value = digit;
      }
    });
    const next = paste.length < 6 ? paste.length : 5;
    inputRef.current[next].focus();
  }

  const handleVerify = () => {
    const otp = inputRef.current.map((input) => input.value).join("");
    if(otp.length !== 6){
      toast.error("Please enter all 6 digits of the otp");
      return;
    }

    setOtp(otp);
    setIsOtpSubmitted(true);
  }

  return (
    <>

    <div style={{ height: "100vh", backgroundColor: "linear-gradient(90deg, #6a5af9, #8268f9", border: "none", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", paddingTop: "8rem"}}
    >
    {/*otp cards  */}
      {!isOtpSubmitted && (
        <div style={{width: "400px"}}>
        <h4 className='text-center' style={{color: "#4d4d4d", fontWeight: "500", fontSize: "1.5rem"}}>OTP Verification Code</h4>
        <p className="text-center" style={{marginBottom: "2rem"}}>
          Enter the 6-digit code sent to your email
        </p>

        <div style={{display: "flex", justifyContent: "between", gap: "1rem", marginBottom: "4rem", color: "white", alignItems: "center", padding: "1rem"}}>
          {[...Array(6)].map((_, i) => (
            <input
            key={i}
            type='text'
            maxLength={1}
            className='form-control text-center fs-4 otp-input'
            ref={(el) => (inputRef.current[i] = el)}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onPaste={handlePaste}
            />
          ))}

        </div>

          <button className="btn btn-primary w-100 fw-semibold" disabled={loading} onClick={handleVerify}>
            {loading ? "Verifying..." : (
                <div>
                    <span style={{color: "white", backgroundColor: "#2d7ff9", padding: ".8rem 8rem", fontSize: "1rem", fontWeight: "400", borderRadius: "8px"}}>Verify</span>
                </div>
            )}
          </button>

      </div>
      )}
      </div>
    </>
  )
}

export default Otp