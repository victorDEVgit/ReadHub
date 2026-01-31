import React from 'react'
import { ReadHubImages } from '../../assets/asset'
import "../Onboarding/OnboardingSecond.css"
import { useNavigate } from 'react-router-dom'

const OnboardingFourth = () => {

    const navigate = useNavigate();

  return (
    <div className='screen'>
            <div className="screenContent">
            <div className="content">
                <div className="image"><img src={ReadHubImages.SecondOnboardingImage} alt="ReadHub" /></div>
                <div className="texts">
                    <span className="title">Turn reading into growth</span>
                    <span className="subtitle">Build a personal knowledge library that grows <br /> with you</span>
                </div>
                <div className="button">
                    <span>Next</span>
                </div>
            </div>
            </div>
        </div>
  )
}

export default OnboardingFourth