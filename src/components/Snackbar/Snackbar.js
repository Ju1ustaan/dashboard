import React from 'react'
import s from './style.module.css'

const Snackbar = ({message, mail, setOpenSnack}) => {
  return (
    <div className={s.wrapper}>
        <p className={s.message}>{message}</p>
        <p className={s.message}>{mail? mail: null}</p>
        <button className={s.btn} onClick={() => setOpenSnack(false)}>Закрыть</button>
    </div>
  )
}

export default Snackbar