import React from 'react'
import "../Onboarding/OnboardingSecond.css"
import { ReadHubImages } from '../../assets/asset'
import { useNavigate } from 'react-router-dom'

const OnboardingThird = () => {

    const navigate = useNavigate();

  return (
    <div className='screen'>
            <div className="screenContent">
                <div className="skip"><span>Skip</span></div>
            <div className="content">
                <div className="image"><img src={ReadHubImages.ThirdOnboardingImage} alt="ReadHub" /></div>
                <div className="texts">
                    <span className="title">Capture what matters</span>
                    <span className="subtitle">Save highlights, ideas, and thoughts you don't <br /> want to forget</span>
                </div>
                <div className="button">
                    <span>Next</span>
                </div>
            </div>
            </div>
        </div>
  )
}

export default OnboardingThird