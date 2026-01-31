import React from 'react'
import "../Onboarding/OnboardingFirst.css"
import { ReadHubImages } from '../../assets/asset'
import { useNavigate } from 'react-router-dom'

const OnboardingFirst = () => {

    const navigate = useNavigate();

  return (
    <div className='page'>
        <div className="pageContent">
            <div className="logo"><img src={ReadHubImages.FirstOnboardingImageIcon} alt="ReadHub" /></div>
            <div className="text"><span>Read.Track.Stay Consistent</span></div>
        </div>
    </div>
  )
}

export default OnboardingFirst