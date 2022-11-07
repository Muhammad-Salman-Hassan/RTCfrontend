import React, { useState } from 'react'
import StepOtp from '../StepPages/StepOtp/StepOtp'
import StepPhone from '../StepPages/StepPhone/StepPhone'

const Authentication = () => {
    const [step, setstep] = useState(1)
    const Steps={
        1:StepPhone,
        2:StepOtp,
    }
    const Step=Steps[step]

    const onNext=()=>{
        setstep(step+1)
    }
  return (
    <div>
        <Step onNext={onNext}/> 
    </div>
  )
}

export default Authentication