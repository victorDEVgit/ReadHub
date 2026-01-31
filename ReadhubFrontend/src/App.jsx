import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import OnboardingFirst from './Pages/Onboarding/OnboardingFirst'
import OnboardingSecond from './Pages/Onboarding/OnboardingSecond'
import OnboardingThird from './Pages/Onboarding/OnboardingThird'
import OnboardingFourth from './Pages/Onboarding/OnboardingFourth'

const App = () => {
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
    <Routes>
    <Route path='onboarding1' element={<OnboardingFirst/>} />
    <Route path='onboarding2' element={<OnboardingSecond/>}/>
    <Route path='onboarding3' element={<OnboardingThird/>}/>
    <Route path="onboarding4" element={<OnboardingFourth/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App