import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:null,
  isAuth:false,
  otp:{
    phone:'',
    hash:''
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth:(state,action)=>{

      const {user}=action.payload

      state.user=user
      state.isAuth=true

    },
    setOtp:(state,action)=>{

      const {hash,phone}=action.payload

      state.otp.phone=phone
      state.otp.hash=hash

    }
   
  },
})

// Action creators are generated for each case reducer function
export const {setAuth,setOtp} = authSlice.actions

export default authSlice.reducer