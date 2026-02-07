import express from 'express'
import {
  login,
  logout,
  register,
  passwordTokenVerification,
  resetPassword,
  refreshToken,
  googleAuth,
  passwordOTP,
} from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.post('/auth/google', googleAuth)
router.post('/refresh', refreshToken)
router.post('/logout', logout)
router.post('/forget-password', passwordOTP)
router.post('/password-token-verification', passwordTokenVerification)
router.patch('/reset-password', resetPassword)
export default router
