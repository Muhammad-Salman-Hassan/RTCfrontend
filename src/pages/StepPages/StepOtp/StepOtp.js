import React, { useState } from 'react'
import Button from '../../../components/Button/Button'
import Card from '../../../components/Card/Card'
import TextInput from '../../../components/TextInput/TextInput'
import styles from '../StepPhone/StepPhone.module.css'
import {MdOutlinePin } from 'react-icons/md';
import { verifyOtp } from '../../../http'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../../../features/user/authSlice'



const StepOtp = ({ onNext }) => {
  const {phone,hash}=useSelector((state)=>state.auth.otp)
  const dispatch=useDispatch()
  const [otp, setotp] = useState("")
  
  const getOtp=(e)=>{
    setotp(e.target.value)
    
  }



  const submit=async()=>{
    try {
      const {data}=await verifyOtp({hash,otp,phone})
      console.log(phone,hash,otp)
      console.log(data)
      dispatch(setAuth(data))
    } catch (error) {
      console.log(error)
    }

    // onNext()
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Enter OTP" icon={<MdOutlinePin/>}>

        <TextInput value={otp} onChange={getOtp} />
        <div className={styles.actionButtonWrap}>
          <Button text="Get Started" onClick={submit} />
        </div>
        <p className={styles.bottomParagraph}>
          Enter Your One Time Pin ! We will send you In a Second!
        </p>
      </Card>
      {/* <button onClick={onNext}>Next</button> */}
    </div>
  )
}

export default StepOtp