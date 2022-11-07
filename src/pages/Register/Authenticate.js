import React, { useState } from 'react'
import StepAvatar from '../StepPages/StepAvatar/StepAvatar'
import StepName from '../StepPages/StepName/StepName'
import StepOtp from '../StepPages/StepOtp/StepOtp'
import StepPhone from '../StepPages/StepPhone/StepPhone'
import StepUserName from '../StepPages/StepUserName/StepUserName'

const Authenticate = () => {
    const Steps={
        1:StepPhone,
        2:StepOtp,
        3:StepName,
        4:StepAvatar,
        5:StepUserName
    }

    const [step, setstep] = useState(1)
    const Step=Steps[step]
    console.log(Step)

    const onNext=()=>{
        setstep(step+1)
    }
  return (
    <div>
        <Step onNext={onNext}/>
    </div>
  )
}

export default Authenticate