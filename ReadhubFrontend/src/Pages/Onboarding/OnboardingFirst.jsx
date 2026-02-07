import React from 'react'
import "../Onboarding/OnboardingFirst.css"
import { ReadHubImages } from '../../assets/asset'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const OnboardingFirst = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/onboarding2");
        }, 2000)
        return () => clearTimeout(timer);
      }, [navigate] )

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