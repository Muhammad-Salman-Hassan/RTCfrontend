import React from 'react'
import styles from './Button.module.css'

const Button = ({onClick,text,icon}) => {
  return (
    <button className={`${styles.button}`} onClick={onClick}>
        <span>{text} <span className={styles.icon}>{icon}</span> </span>
    </button>
  )
}

export default Button