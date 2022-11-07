import React, { useState } from 'react'
import Button from '../../../components/Button/Button'
import Card from '../../../components/Card/Card'
import TextInput from '../../../components/TextInput/TextInput'
import { setName } from '../../../features/user/activate-slice'
import styles from "../StepOtp/Step-otp.module.css"
import{useDispatch,useSelector} from 'react-redux'

const StepName = ({ onNext }) => {
  const {name}=useSelector((state)=>state.activate)
  const dispatch=useDispatch()
  const [fname, setfname] = useState(name)
  const getname=(e)=>{
    setfname(e.target.value)
  }

  const nextStep=()=>{
    if(!fname){
      return
    }

    dispatch(setName(fname))

    onNext()
  }
  return (
    <div >
      <Card title="Enter Your Good Name" icon={"sa"}>

        <TextInput value={fname} onChange={getname} />
       
        <p className={styles.bottomParagraph}>
          Enter Your Name You will be called from it!
        </p>
        <div className={styles.actionButtonWrap}>
          <Button text="Enter Name"  onClick={nextStep}/>
        </div>
      </Card>
      
    </div>
  )
}

export default StepName