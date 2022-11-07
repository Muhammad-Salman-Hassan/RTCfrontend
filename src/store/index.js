import { configureStore } from '@reduxjs/toolkit'
import auth from '../features/user/authSlice'
import activate from '../features/user/activate-slice'
export const store = configureStore({
    reducer: {
      auth,
      activate
    },
  })