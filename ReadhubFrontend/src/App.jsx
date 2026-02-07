import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import OnboardingFirst from './Pages/Onboarding/OnboardingFirst'
import OnboardingSecond from './Pages/Onboarding/OnboardingSecond'
import OnboardingThird from './Pages/Onboarding/OnboardingThird'
import OnboardingFourth from './Pages/Onboarding/OnboardingFourth'
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/Login'
import ForgotPassword from './Pages/Auth/ForgotPassword'
import Otp from './Pages/Auth/Otp'
import NewPassword from './Pages/Auth/NewPassword'

const App = () => {
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<OnboardingFirst/>} />
    <Route path='/onboarding1' element={<OnboardingFirst/>} />
    <Route path='/onboarding2' element={<OnboardingSecond/>}/>
    <Route path='/onboarding3' element={<OnboardingThird/>}/>
    <Route path="/onboarding4" element={<OnboardingFourth/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/forgotpassword" element={<ForgotPassword/>}/>
    <Route path="/otp" element={<Otp/>}/>
    <Route path="/newpassword" element={<NewPassword/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App