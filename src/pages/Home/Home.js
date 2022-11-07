import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import styles from './Home.module.css'
import { IoMicCircle } from 'react-icons/io5';

const Home = () => {
  const signInLinkStyle = {
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px'
  }
  const navigate = useNavigate()
  const startRegister = () => {

    navigate('/authenticate')
  }
  return (
    <div className={`${styles.cardWrapper}`}>
      <Card title="Welcome to CodeTalks!" icon={<IoMicCircle/>}>
        <p className={styles.text}>
          We’re working hard to get CodeTalks ready for everyone!
          While we wrap up the finishing youches, we’re adding people
          gradually to make sure nothing breaks
        </p>

        <div>
          <Button onClick={startRegister} text="Get Started" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>
            Have an invite text?
          </span>

        </div>
      </Card>
    </div>
  )
}

export default Home