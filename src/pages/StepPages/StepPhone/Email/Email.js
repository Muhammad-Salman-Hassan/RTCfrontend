import React, { useState } from 'react'
import Button from '../../../../components/Button/Button'
import Card from '../../../../components/Card/Card'
import { HiOutlineMail } from 'react-icons/hi';
import TextInput from '../../../../components/TextInput/TextInput';
import styles from '../StepPhone.module.css'
const Email = ({onNext}) => {
  const [email, setemail] = useState("")

  const getEmail = (e) => {
    setemail(e.target.value)
  }
  console.log(email)
  return (
    <>
      <Card title="Enter Your Email!" icon={<HiOutlineMail />}>

        <TextInput value={email} onChange={getEmail} />
        <div className={styles.actionButtonWrap}>
          <Button text="Get Started" onClick={onNext}/>
        </div>
          <p className={styles.bottomParagraph}>
            By Entring your Email You Must Accept our Privacy Policy!
          </p>
      </Card>
    </>
  )
}

export default Email