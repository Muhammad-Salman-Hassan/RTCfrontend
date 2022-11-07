import React, { useState } from 'react'
import Button from '../../../components/Button/Button'
import Card from '../../../components/Card/Card'
import styles from './Step-avatar.module.css'
import char from "../../../images/monkey1.png"
import { useDispatch, useSelector } from 'react-redux'
import { MdManageAccounts } from 'react-icons/md'
import { setAvatar } from '../../../features/user/activate-slice'
import { activate } from '../../../http'



const StepAvatar = ({ onNext }) => {

    const dispatch=useDispatch()
    const {name,avatar}=useSelector((state)=>state.activate)
  const [image, setimage] = useState(char)



  const captureInput=(e)=>{
    const file=e.target.files[0]
   const reader=new FileReader()
   reader.readAsDataURL(file)
   reader.onload=function(){
    setimage(reader.result)
    dispatch(setAvatar(reader.result))
   }
  } 



  async function submit(){

    try {
        
        const {data}=await activate({name,avatar})
        console.log(data)

    } catch (error) {
        console.log(error)
    }


  }
  return (
    <div className={styles.wrapper}>
      
      <Card title={`Okay, ${name}`} icon={<MdManageAccounts />}>
                <p className={styles.subHeading}>How’s this photo?</p>
                <div className={styles.avatarWrapper}>
                    <img
                        className={styles.avatarImage}
                        src={image}
                        alt="avatar"
                    />
                </div>
                <div>
                    <input
                       onChange={captureInput}
                        id="avatarInput"
                        type="file"
                        className={styles.avatarInput}
                    />
                    <label className={styles.avatarLabel} htmlFor="avatarInput">
                        Choose a different photo
                    </label>
                </div>
                <div className={styles.btnwrapper}>
                    <Button  text="Next" onClick={submit}/>
                </div>
            </Card>
    
    </div>
  )
}

export default StepAvatar