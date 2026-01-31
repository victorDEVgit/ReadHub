import React from 'react'
import "../Onboarding/OnboardingSecond.css"
import { ReadHubImages } from '../../assets/asset'
import { useNavigate } from 'react-router-dom'

const OnboardingSecond = () => {

    const navigate = useNavigate();

  return (
    <div className='screen'>
        <div className="screenContent">
            <div className="skip"><span>Skip</span></div>
        <div className="content">
            <div className="image"><img src={ReadHubImages.SecondOnboardingImage} alt="ReadHub" /></div>
            <div className="texts">
                <span className="title">Read with intention</span>
                <span className="subtitle">Don't just read more. Read what truly matters <br /> to you</span>
            </div>
            <div className="button">
                <span>Next</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default OnboardingSecond