import React, { useState } from 'react'
import Email from './Email/Email'
import Phone from './Phone/Phone'
import styles from "./StepPhone.module.css"
import {HiOutlineMail } from 'react-icons/hi';
import {BsPhoneFill } from 'react-icons/bs';

const StepPhone = ({ onNext }) => {


  const Steps = {
    email: Email,
    phone: Phone
  }

  const [type, settype] = useState("email")

  const Step = Steps[type]

  const EmailFunc = () => {
    settype("email")
  }

  const PhoneFunc = () => {
    settype("phone")
  }

  return (
    <>
      <div className={styles.cardWrapper}>
        <div className={styles.buttonwrapper}>
          <div className={styles.buttonWrap}>
            <button className={`${styles.tabButton} ${type==="email"? (styles.active):""}`} onClick={EmailFunc}>
              <HiOutlineMail/>
            </button>
            <button className={`${styles.tabButton} ${type==="phone"? (styles.active):""}`} onClick={PhoneFunc}>
              <BsPhoneFill/>
            </button>
          </div>
        </div>

        <Step onNext={onNext}/>
      </div>


    </>
  )
}

export default StepPhone