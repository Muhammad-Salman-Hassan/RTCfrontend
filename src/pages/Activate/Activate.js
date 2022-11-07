import React, { useState } from 'react'
import StepName from "../StepPages/StepName/StepName"
import StepAvatar from "../StepPages/StepAvatar/StepAvatar"
import styles from "../StepPages/StepOtp/Step-otp.module.css"

const steps={
  1:StepName,
  2:StepAvatar
}

const Activate = () => {

  const [step, setstep] = useState(1)

  const Step=steps[step]
const onNext=()=>{
  setstep(step+1)
}
  return (
    <div className={styles.cardWrapper}>
      
    <Step onNext={onNext}/>


    </div>
  )
}

export default Activate